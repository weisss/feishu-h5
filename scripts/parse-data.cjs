const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../产品资料.md'), 'utf-8');

// Parse markdown table
const lines = content.split('\n');
const dataRows = [];
let inTable = false;

for (const line of lines) {
  const trimmed = line.trim();
  if (trimmed.startsWith('| 大类') || trimmed.startsWith('|:')) {
    inTable = true;
    continue;
  }
  if (inTable && trimmed.startsWith('|')) {
    const cells = trimmed.split('|').map(c => c.trim()).filter(c => c.length > 0);
    // Skip separator rows (all cells start with ':')
    if (cells.length > 0 && cells[0].startsWith(':')) continue;
    if (cells.length >= 4) {
      dataRows.push({
        category: cells[0],
        subCategory: cells[1],
        title: cells[2],
        url: cells[3].replace(/\\/g, '')
      });
    }
  }
}

// Group by category -> subCategory
const tree = new Map();
for (const row of dataRows) {
  if (!tree.has(row.category)) {
    tree.set(row.category, new Map());
  }
  const subMap = tree.get(row.category);
  if (!subMap.has(row.subCategory)) {
    subMap.set(row.subCategory, []);
  }
  subMap.get(row.subCategory).push({ title: row.title, url: row.url });
}

// Category to icon mapping
const iconMap = {
  '智能门锁': 'KeyRound',
  '智能开关插座': 'ToggleRight',
  '智能中控屏': 'PanelTop',
  '窗帘电机': 'SlidersHorizontal',
  '智能控制器': 'Cpu',
  '可视对讲': 'Video',
  '智能晾晒': 'Shirt',
  '智能浴霸': 'Droplets',
  '智能健康生活电器': 'Heart',
  '智能影音': 'Speaker',
  '全屋网络': 'Wifi',
  '集成空调主机': 'Thermometer',
  '集成空调末端': 'Wind',
  '智能安防': 'Shield',
  '智能照明': 'Lightbulb',
  '智能卫浴': 'Bath',
};

let idCounter = 1;
function nextId(prefix) {
  return `${prefix}-${String(idCounter++).padStart(3, '0')}`;
}

// Generate TypeScript
let ts = `export interface ManualNode {
  id: string;
  name: string;
  type: 'category' | 'manual';
  icon?: string;
  url?: string;
  children?: ManualNode[];
}

export const knowledgeData: ManualNode[] = [
`;

const categories = Array.from(tree.keys());
for (let ci = 0; ci < categories.length; ci++) {
  const cat = categories[ci];
  const catId = nextId('cat');
  const icon = iconMap[cat] || 'FileText';

  ts += `  {
    id: '${catId}',
    name: '${cat}',
    type: 'category',
    icon: '${icon}',
    children: [
`;

  const subCats = Array.from(tree.get(cat).keys());
  for (let si = 0; si < subCats.length; si++) {
    const subCat = subCats[si];
    const subCatId = nextId('sub');
    const manuals = tree.get(cat).get(subCat);

    ts += `      {
        id: '${subCatId}',
        name: '${subCat}',
        type: 'category',
        children: [
`;

    for (let mi = 0; mi < manuals.length; mi++) {
      const manual = manuals[mi];
      const manualId = nextId('m');
      // Escape single quotes in title
      const safeTitle = manual.title.replace(/'/g, "\\'");
      const safeUrl = manual.url.replace(/'/g, "\\'");
      ts += `          { id: '${manualId}', name: '${safeTitle}', type: 'manual', url: '${safeUrl}' }`;
      if (mi < manuals.length - 1) ts += ',';
      ts += '\n';
    }

    ts += `        ],
      }`;
    if (si < subCats.length - 1) ts += ',';
    ts += '\n';
  }

  ts += `    ],
  }`;
  if (ci < categories.length - 1) ts += ',';
  ts += '\n';
}

ts += `];

export function findNodeById(data: ManualNode[], id: string): ManualNode | null {
  for (const node of data) {
    if (node.id === id) return node;
    if (node.children) {
      const found = findNodeById(node.children, id);
      if (found) return found;
    }
  }
  return null;
}

export function searchManuals(data: ManualNode[], query: string): ManualNode[] {
  const results: ManualNode[] = [];
  const q = query.toLowerCase();
  function walk(nodes: ManualNode[]) {
    for (const node of nodes) {
      if (node.type === 'manual' && node.name.toLowerCase().includes(q)) {
        results.push(node);
      }
      if (node.children) walk(node.children);
    }
  }
  walk(data);
  return results;
}

export function getAllManuals(data: ManualNode[]): ManualNode[] {
  const results: ManualNode[] = [];
  function walk(nodes: ManualNode[]) {
    for (const node of nodes) {
      if (node.type === 'manual') results.push(node);
      if (node.children) walk(node.children);
    }
  }
  walk(data);
  return results;
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/mockData.ts'), ts, 'utf-8');
console.log(`Generated mockData.ts with ${dataRows.length} manuals in ${categories.length} categories`);
