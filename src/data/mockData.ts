export interface ManualNode {
  id: string;
  name: string;
  type: 'category' | 'manual';
  icon?: string;
  url?: string;
  children?: ManualNode[];
}

export const knowledgeData: ManualNode[] = [
  {
    id: 'cat-001',
    name: '智能门锁',
    type: 'category',
    icon: 'KeyRound',
    children: [
      {
        id: 'sub-002',
        name: '运营商门锁C2',
        type: 'category',
        children: [
          { id: 'm-003', name: '【说明书】智能门锁 C2', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/UWCgwJgl3iBB3Zkn0zbcSSKynOc' }
        ],
      },
      {
        id: 'sub-004',
        name: '门锁V5系列',
        type: 'category',
        children: [
          { id: 'm-005', name: '【说明书】智能门锁V5Face', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/MNxvwxCQkilJwRki3ihcCsQ7nte' },
          { id: 'm-006', name: '【说明书】智能门锁V5 Eyes', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/YkrGwHqhGiGpr4k9ueqcpUGwnXf' }
        ],
      },
      {
        id: 'sub-007',
        name: '门锁C1',
        type: 'category',
        children: [
          { id: 'm-008', name: '【说明书】智能门锁C1  使用说明书&安装说明书', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/ISx1wkfYFibo4ikz1cccgfoFnvc' },
          { id: 'm-009', name: '【说明书】智能门锁HW1', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/UJCxw6mn8iOe1LkAUfOcY6SAnYd' }
        ],
      },
      {
        id: 'sub-010',
        name: '运营商门锁C1',
        type: 'category',
        children: [
          { id: 'm-011', name: '【说明书】智能门锁 C1（电信版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/JdqZwbBedividHkII7Gcp3z0n1d' }
        ],
      },
      {
        id: 'sub-012',
        name: '门锁T1系列',
        type: 'category',
        children: [
          { id: 'm-013', name: '【说明书】智能门锁T1', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/FGJpwPunvi7xCNkWiCUc1PsRnhe' }
        ],
      },
      {
        id: 'sub-014',
        name: '门锁S2',
        type: 'category',
        children: [
          { id: 'm-015', name: '【说明书】智能门锁S2', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/GaB7w10ZwiH3zOko17ycOOaMntf' }
        ],
      },
      {
        id: 'sub-016',
        name: '门锁P20',
        type: 'category',
        children: [
          { id: 'm-017', name: '【说明书】全自动可视猫眼智能门锁P20', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Umf4wEfggiMf8FkNb5lcE2l5nv2' }
        ],
      },
      {
        id: 'sub-018',
        name: '门锁V10系列',
        type: 'category',
        children: [
          { id: 'm-019', name: '【说明书】全自动可视猫眼智能门锁V10', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/TdhPw8Xu9iqgqvkmSUVcYi5Knwf' }
        ],
      },
      {
        id: 'sub-020',
        name: '门锁C3系列',
        type: 'category',
        children: [
          { id: 'm-021', name: '【说明书】门锁C3 Pro（小翼管家定制版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/MGUKwW7aliCLg8kFaJLcUjAYn9c' }
        ],
      }
    ],
  },
  {
    id: 'cat-022',
    name: '智能开关插座',
    type: 'category',
    icon: 'ToggleRight',
    children: [
      {
        id: 'sub-023',
        name: 'Defy插座',
        type: 'category',
        children: [
          { id: 'm-024', name: '【说明书】MixSwitch Defy 五孔快充插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/DWmewTlEiiXBD3koxfAc9zRSnxc' }
        ],
      },
      {
        id: 'sub-025',
        name: 'Bach插座',
        type: 'category',
        children: [
          { id: 'm-026', name: '【说明书】MixSwitch · Bach五孔快充插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/J6DRwr1e7ix0rlkyp9sc0VGanXg' },
          { id: 'm-027', name: '【说明书】MixSwitch·Bach五孔插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/K2NUwyu06if8gFkgRXMciUfTnbb' }
        ],
      },
      {
        id: 'sub-028',
        name: '高斯插座',
        type: 'category',
        children: [
          { id: 'm-029', name: '【说明书】高斯五孔一开插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/R1HNwfD6MiH5vUkeapYcvJL5nib' },
          { id: 'm-030', name: '【说明书】高斯16A一开插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/XleTwn8e3iGUMOk4OKxcLhBWneb' },
          { id: 'm-031', name: '【说明书】高斯五孔插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/HHdnwarFKimFLNkmtjucLEZ1nTh' },
          { id: 'm-032', name: '【说明书】高斯五孔快充插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/N3Lqw2wv0i7wCekIqHPcnI2Bnyh' },
          { id: 'm-033', name: '【说明书】高斯一位电脑插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/NdlhwECwWiL7kmkmRjgcN1EAnOb' },
          { id: 'm-034', name: '【说明书】高斯一位电视插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/ZjEBwWRyUi42Bxk7RkXcHN12nSg' },
          { id: 'm-035', name: '【说明书】高斯一位电话插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/ANvYw51I5i2soDkNjZdcLFgnn9e' },
          { id: 'm-036', name: '【说明书】高斯紧急按钮插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Gw9jwFzcAiwDUyki0ZJcCA3ynnf' }
        ],
      },
      {
        id: 'sub-037',
        name: '高斯开关',
        type: 'category',
        children: [
          { id: 'm-038', name: '【说明书】高斯智能开关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/YjrZwkFlLiZsRbkYfIucwoYfns5' }
        ],
      },
      {
        id: 'sub-039',
        name: 'MixSwitch插座',
        type: 'category',
        children: [
          { id: 'm-040', name: '【说明书】MixSwitch 紧急按钮插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/BjGrwNi3giW8RDkxFTdcikNxnse' },
          { id: 'm-041', name: '【说明书】MixSwitch 五孔一开插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/SDIUwZJ5PiYJjAkFAt9cFT95nrg' },
          { id: 'm-042', name: '【说明书】MixSwitch 五孔插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/MKyewpLwWiCr3Vk59RocmiD9n9b' },
          { id: 'm-043', name: '【说明书】MixSwitch 五孔快充插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Udpwwi5pui5f4qko7WYcmz2Pnwb' },
          { id: 'm-044', name: '【说明书】MixSwitch 16A 一开插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/K8CGwYIByivF06krLCycMjb3nYx' },
          { id: 'm-045', name: '【说明书】MixSwitch 一位电话插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/UxncwalG0igCHGkezJNchTa9nSd' },
          { id: 'm-046', name: '【说明书】MixSwitch 一位电视插', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/VGehw8kxUiJcMYkT0pEc8qS1nyg' },
          { id: 'm-047', name: '【说明书】MixSwitch 一位电脑插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/EGpewHQUli2hSkkD0z0cux4Fnwf' }
        ],
      },
      {
        id: 'sub-048',
        name: '隐藏式开关',
        type: 'category',
        children: [
          { id: 'm-049', name: '【说明书】隐藏式智能开关(零火版)', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Aw3qwNxRjiotbHke7Ecc9rifnIc' },
          { id: 'm-050', name: '【说明书】隐藏式智能开关（专业版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/OcQpw0fcuiFqJ9kWUU1cZYc7n4g' },
          { id: 'm-051', name: '【说明书】隐藏式智能开关（单火版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/F4sWwscM7i9liFknMqwcNNIyndd' }
        ],
      },
      {
        id: 'sub-052',
        name: '精灵带屏开关',
        type: 'category',
        children: [
          { id: 'm-053', name: '【说明书】精灵温控器', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/A1BswDZUViqm3MkmL47cTP1Lnqc' },
          { id: 'm-054', name: '【说明书】精灵智能开关（触屏版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/JqzYwM4nHiOXEIkNNsMcVWJcnJe' }
        ],
      },
      {
        id: 'sub-055',
        name: 'MixSwitch开关零火',
        type: 'category',
        children: [
          { id: 'm-056', name: '【说明书】MixSwitch 超级智能开关（电池版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/IWtbwWIQ7iXr8uklRyGcEW22nuc' },
          { id: 'm-057', name: '【说明书】MixSwitch 智能开关（四开）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Jh1lwOUmvi0yvwkrNZdcFJHjnhc' },
          { id: 'm-058', name: '【说明书】MixSwitch智能开关（一二三开）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/XN9bwmE9Sidp8qkhhfncolCBnUf' },
          { id: 'm-059', name: '【说明书】MixSwitch超级智能开关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/MrP2wu6nviJuWGk6Zv4c0ytBnre' }
        ],
      },
      {
        id: 'sub-060',
        name: 'Defy开关',
        type: 'category',
        children: [
          { id: 'm-061', name: '【说明书】MixSwitch Defy智能开关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/WI2VwaIOri3ejpkqOh9cukaBnBb' }
        ],
      },
      {
        id: 'sub-062',
        name: 'Bach开关',
        type: 'category',
        children: [
          { id: 'm-063', name: '【说明书】Mixswitch Bach智能开关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Nw8Fw47Xri0P1fkak6hcPN2anJg' }
        ],
      },
      {
        id: 'sub-064',
        name: 'Origin开关',
        type: 'category',
        children: [
          { id: 'm-065', name: '【说明书】MixSwitch origin超级智能开关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/TghSwpKtYitsfLkLKU9cEhKentb' }
        ],
      },
      {
        id: 'sub-066',
        name: 'touch开关',
        type: 'category',
        children: [
          { id: 'm-067', name: '【说明书】62-Touch classic智能开关面板说明书(中国电信)V0.1 210326', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/DzGqwbFFHi69GekdcErcSygOnTb' },
          { id: 'm-068', name: '【说明书】63-3.06.010865 118型开关（Touch Pro）说明书-ORVIBO V0.1 230111', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/VBNywvfvDisu0HkIrXycAZYsnzc' }
        ],
      },
      {
        id: 'sub-069',
        name: 'MixSwitch开关单火',
        type: 'category',
        children: [
          { id: 'm-070', name: '【说明书】MixSwitch智能开关（单火版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Ape0w6QqLiaRgYkd7xVcoNt1nkb' }
        ],
      },
      {
        id: 'sub-071',
        name: '精灵开关单火',
        type: 'category',
        children: [
          { id: 'm-072', name: '【说明书】74-精灵智能开关说明书 V0.2 201103', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/ZUHnwPBOJixmxDkGCI8cj1zPnOg' }
        ],
      },
      {
        id: 'sub-073',
        name: '空调控制面板',
        type: 'category',
        children: [
          { id: 'm-074', name: '【说明书】二合一温控面板', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Z4D7wdIHZiGla4kkrZgcg9Kpnoc' },
          { id: 'm-075', name: '【说明书】中央空调控制面板（冷热型）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/CbYxwyYozik3Y7kz0gscj6Wdnib' },
          { id: 'm-076', name: '【说明书】中央空调控制面板（单冷型）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/VzOvwPmjxiW3XvkbdzkcmkuVnhg' }
        ],
      },
      {
        id: 'sub-077',
        name: '小方',
        type: 'category',
        children: [
          { id: 'm-078', name: '【说明书】小方智能遥控器（CT10W）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/MgXWwKEyqiEf2NkkamzcH4Lpn6b?from=from_parent_docs' }
        ],
      },
      {
        id: 'sub-079',
        name: '随意贴开关',
        type: 'category',
        children: [
          { id: 'm-080', name: '【说明书】随意贴开关（Smart Sticker） 中英文', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Y3jQwlYr5iUTeRkFGYCcHvodnik' }
        ],
      },
      {
        id: 'sub-081',
        name: 'S30C',
        type: 'category',
        children: [
          { id: 'm-082', name: '【说明书】S30C 智能插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/VwRpwjLCPigiEdkZUZec22N2nce' },
          { id: 'm-083', name: '【说明书】S30c 智能插座 中国移动和家亲', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/A0kgwKORqiVaFvk6S6rcoQsonif' }
        ],
      },
      {
        id: 'sub-084',
        name: '小圆',
        type: 'category',
        children: [
          { id: 'm-085', name: '【说明书】小圆智能遥控器(CT30W)', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Uc8Zw4FPXiSFgOkSoaNckT4YnPg' }
        ],
      },
      {
        id: 'sub-086',
        name: '多功能智能遥控器',
        type: 'category',
        children: [
          { id: 'm-087', name: '【说明书】智能红外遥控器', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Q4V3wAlE5iYiq3kFaK0cPJvCnjg' }
        ],
      },
      {
        id: 'sub-088',
        name: '极锐开关',
        type: 'category',
        children: [
          { id: 'm-089', name: '【说明书】极锐系列智能开关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/CjQtwnRsailEbYkQLsXc3Oqgnru' }
        ],
      },
      {
        id: 'sub-090',
        name: '极光开关',
        type: 'category',
        children: [
          { id: 'm-091', name: '【说明书】极光系列智能开关(零火)', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/KeNLwWRgNiUxRPkTjCYcWMLKnLc' }
        ],
      },
      {
        id: 'sub-092',
        name: '入墙式开关',
        type: 'category',
        children: [
          { id: 'm-093', name: '【说明书】智能开关(入墙式)', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/L2yawsfFuiLh6HkCZkmcUM3ynue' },
          { id: 'm-094', name: '【说明书】智能开关(入墙式)(小翼管家定制版)', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/XApHwnbFGiQbDFkRnnvcyvjrnqh' }
        ],
      },
      {
        id: 'sub-095',
        name: 'WiFi插座',
        type: 'category',
        children: [
          { id: 'm-096', name: '【说明书】S20 智能WiFi插座', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/UBhmwWW6qincrYksLi5cYG7Tnkc' }
        ],
      },
      {
        id: 'sub-097',
        name: 'MixDimmer调光开关',
        type: 'category',
        children: [
          { id: 'm-098', name: '【说明书】MixDimmer D5', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/XLOEwaxtRiwg9mkf56ccFnbpnce' },
          { id: 'm-099', name: '【说明书】MixDimmer 5', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/JJa5wvQZ9i9FsAkSOzdcjxrYngd' }
        ],
      },
      {
        id: 'sub-100',
        name: '白金开关',
        type: 'category',
        children: [
          { id: 'm-101', name: '【说明书】白金系列智能开关说明书（单火）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/PDKwwhMiLi3niskwM6yc74Mbn8e' }
        ],
      },
      {
        id: 'sub-102',
        name: 'Allone',
        type: 'category',
        children: [
          { id: 'm-103', name: '【说明书】Allone Pro', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/OYq7wizmNisxfskKwJAcUTpTnEh' }
        ],
      },
      {
        id: 'sub-104',
        name: '智能网关',
        type: 'category',
        children: [
          { id: 'm-105', name: '【说明书】智能网关（VS30ZW）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Mc7GwOvHwim1qQklbVxcDielnqh?from=from_parent_docs' },
          { id: 'm-106', name: '【说明书】ZigBee Mini智能网关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/QKDMw3c5MiS530kFzU0c0ef3nZd' }
        ],
      },
      {
        id: 'sub-107',
        name: '高斯旋钮屏',
        type: 'category',
        children: [
          { id: 'm-108', name: '【说明书】高斯语音智控屏G2（旋转屏网关）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/IED6whHi7ivpc7krfRFcC5eynHc' }
        ],
      },
      {
        id: 'sub-109',
        name: 'Classic开关',
        type: 'category',
        children: [
          { id: 'm-110', name: '【说明书】MixSwitch Classic C1（一二三开）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/B7tVwq0yrijmByk548HcXVgUnYf' }
        ],
      }
    ],
  },
  {
    id: 'cat-111',
    name: '智能中控屏',
    type: 'category',
    icon: 'PanelTop',
    children: [
      {
        id: 'sub-112',
        name: '高斯旋钮屏',
        type: 'category',
        children: [
          { id: 'm-113', name: '【说明书】高斯语音智控屏G1（旋钮屏网关）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/BPxtwHYk9ipnfDk9IkbcBIhInuf' }
        ],
      },
      {
        id: 'sub-114',
        name: 'MixPad Defy',
        type: 'category',
        children: [
          { id: 'm-115', name: '【说明书】Mixpad Defy 智能语音开关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/HKuhwK8hkiMYYukIAf5cavC5nWd' },
          { id: 'm-116', name: '【说明书】Mixpad Defy 智能语音开关（网关版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Fo9gwBZ5fiRYsXkaN57cRByJnvc?fromScene=spaceOverview' }
        ],
      },
      {
        id: 'sub-117',
        name: 'MixPad E',
        type: 'category',
        children: [
          { id: 'm-118', name: '【说明书】MixPad E', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Pf25wqGutifT7zkOz3Rc2QVnnAh' }
        ],
      },
      {
        id: 'sub-119',
        name: 'MixPad Classic',
        type: 'category',
        children: [
          { id: 'm-120', name: '【说明书】MixPad Classic智能中控屏', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/TbNRwDfFOiInSbk4ZgacEQQ6nTY' }
        ],
      },
      {
        id: 'sub-121',
        name: 'MixPad Air',
        type: 'category',
        children: [
          { id: 'm-122', name: '【说明书】MixPad Air三恒智能温控器', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Py7mw243yikQ9xkZggBcM34fnIf' }
        ],
      },
      {
        id: 'sub-123',
        name: 'MixPad 7',
        type: 'category',
        children: [
          { id: 'm-124', name: '【说明书】MixPad7智能中控屏（7寸温控版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Y9P8wUw4HiYfl6ka63Oc0neXnYe' },
          { id: 'm-125', name: '【说明书】MixPad 7智能语音屏', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/FVeYwUfETibDJckT6Q1cBudVnoH' },
          { id: 'm-126', name: '【说明书】MixPad 7（AI\&Matter）智能中控屏', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/PjfnwcsMgik1ZakLCH6c6WfDnVf' }
        ],
      },
      {
        id: 'sub-127',
        name: 'Mixpad 系列',
        type: 'category',
        children: [
          { id: 'm-128', name: '【说明书】MixPad智能语音开关（单火版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/B5KowwW7KixTWmkFzEncwgVUnEc' }
        ],
      },
      {
        id: 'sub-129',
        name: 'MixPad 精灵零火',
        type: 'category',
        children: [
          { id: 'm-130', name: '【说明书】MixPad精灵触屏语音开关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/P17Hwygv3iZ3dbkYNTbcbe6Uncg' }
        ],
      },
      {
        id: 'sub-131',
        name: 'MixPad 4',
        type: 'category',
        children: [
          { id: 'm-132', name: '【说明书】MixPad 4（AI\&Matter）智能中控屏', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Vu9Cw2NgliR5AQkY4KocYF37nSc' }
        ],
      },
      {
        id: 'sub-133',
        name: 'MixPad 精灵单火',
        type: 'category',
        children: [
          { id: 'm-134', name: '【说明书】MixPad 精灵触屏语音开关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/D0cUwycX0iTzRLkSloZcgK5vnfT' }
        ],
      },
      {
        id: 'sub-135',
        name: 'MixPad S',
        type: 'category',
        children: [
          { id: 'm-136', name: '【说明书】MixPad S超级智能开关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/V99dwpMM6iLqHqkW6cfctEi3nKg' }
        ],
      },
      {
        id: 'sub-137',
        name: 'Mixpad mini',
        type: 'category',
        children: [
          { id: 'm-138', name: '【说明书】MixPad Mini（零火版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/VZg9wL0ZgiK6IwkRnbccrmjcnUc' },
          { id: 'm-139', name: '【说明书】MixPad Mini（单火版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/SjaIwztyniMadkkkwlsc0Yyznwd' }
        ],
      },
      {
        id: 'sub-140',
        name: 'MixPad X',
        type: 'category',
        children: [
          { id: 'm-141', name: '【说明书】MixPad X全景屏超级智能面板', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/WpAMwLVKniXQBLkBGOmcwOpunrd' }
        ],
      },
      {
        id: 'sub-142',
        name: 'MixPad C2',
        type: 'category',
        children: [
          { id: 'm-143', name: '【说明书】MixPad C超级智能开关', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/XbsfwJB5vi5nCFkFwqhcyLnxn9c' },
          { id: 'm-144', name: '【说明书】MixPad C2智能语音开关（零火版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/ZCzswoRyAirwaMkKDOYcqhBUnvf' },
          { id: 'm-145', name: '【说明书】MixPad C2智能语音开关（单火版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/T7JAwG6WAiViemkMz43c0bWinQb' }
        ],
      },
      {
        id: 'sub-146',
        name: 'MixPad XC',
        type: 'category',
        children: [
          { id: 'm-147', name: '【说明书】MixPad XC全景智能语音屏', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/AESCwrrckiQhWRkn6jFcEv0QnWh' }
        ],
      },
      {
        id: 'sub-148',
        name: 'MixPad 7Ultra',
        type: 'category',
        children: [
          { id: 'm-149', name: '【说明书】MixPad 7 Ultra', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/DUvtw80rEivN71kPnYhc19Ltnjf' }
        ],
      },
      {
        id: 'sub-150',
        name: 'MixPad X Pro',
        type: 'category',
        children: [
          { id: 'm-151', name: '【说明书】MixPad X Pro全景智能语音屏', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/EyTywtisRiEVDuktNgAcD3knnlb?from=from_parent_docs' }
        ],
      },
      {
        id: 'sub-152',
        name: 'MixPad M2',
        type: 'category',
        children: [
          { id: 'm-153', name: '【说明书】MixPad M2智能中控屏', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/MqZOwYLNViiMzskBUo6cJLtcnQh' }
        ],
      },
      {
        id: 'sub-154',
        name: 'MixPad D1',
        type: 'category',
        children: [
          { id: 'm-155', name: '【说明书】Mixpad D1 User Manual', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/PJAgwvW1ni5scjkGUOccbET1ncg' }
        ],
      },
      {
        id: 'sub-156',
        name: 'MixPad 12',
        type: 'category',
        children: [
          { id: 'm-157', name: '【说明书】MixPad 12（AI\&Matter）智能中控屏', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/S6rfw7moLi38c0krhaxcTptxnVf' }
        ],
      },
      {
        id: 'sub-158',
        name: 'MixPad 7C',
        type: 'category',
        children: [
          { id: 'm-159', name: '【说明书】Mixpad 7C', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Uzb2w9eE9iKv13k7sFYcJJ5mnnh' }
        ],
      },
      {
        id: 'sub-160',
        name: 'Mixpad 10',
        type: 'category',
        children: [
          { id: 'm-161', name: '【说明书】MixPad 10（AI\&Matter）智能中控屏', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/SKTNwQU6aif6pMkJNFacGPXln4e' },
          { id: 'm-162', name: '【说明书】MixPad 10装饰智能语音屏', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/ZgoBwvaLiiYdSJki3gRcLKsYnbc' }
        ],
      },
      {
        id: 'sub-163',
        name: '银河中控屏',
        type: 'category',
        children: [
          { id: 'm-164', name: '【说明书】银河中控屏 MixPad S4', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/EgkBwTUvsip8ORkOjGMc1r6sn6f' },
          { id: 'm-165', name: '【说明书】银河中控屏 MixPad S7', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/QTiowq4FxiYYMiktlvzc5tCRnBc' },
          { id: 'm-166', name: '【说明书】银河中控屏 MixPad S12', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/OIjpwNeAuiOTPskL7grc9U6ZnZd' }
        ],
      }
    ],
  },
  {
    id: 'cat-167',
    name: '窗帘电机',
    type: 'category',
    icon: 'SlidersHorizontal',
    children: [
      {
        id: 'sub-168',
        name: '精灵超静音套装',
        type: 'category',
        children: [
          { id: 'm-169', name: '【说明书】精灵超静音智能窗帘电机（WiFi版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/FXGgwl6dOiswSRkZQUacwhtsnXf' },
          { id: 'm-170', name: '【说明书】精灵超静音智能窗帘电机（米家版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Gl4FwEHopiSQm3ksexIcdYqSntb' }
        ],
      },
      {
        id: 'sub-171',
        name: '工程款窗帘电机',
        type: 'category',
        children: [
          { id: 'm-172', name: '【说明书】智能窗帘电机（杜亚联名款）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/W6oCw8it8iLgaPkHaORcwvOEnsc' }
        ],
      },
      {
        id: 'sub-173',
        name: '小白电机套装',
        type: 'category',
        children: [
          { id: 'm-174', name: '【说明书】小白智能窗帘电机', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/FCt6wvoPFiecMJknBAccxeqYnDe' }
        ],
      },
      {
        id: 'sub-175',
        name: '超静音开合帘电机',
        type: 'category',
        children: [
          { id: 'm-176', name: '【说明书】超静音智能窗帘（ZigBee版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/AmOHw1q6CiqHEckavoNckb2Un6b' },
          { id: 'm-177', name: '【说明书】超静音智能开合帘电机', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/WmjKwSSOjiUjEGkrpTmcPM4Fnce' }
        ],
      },
      {
        id: 'sub-178',
        name: 'DB28电机',
        type: 'category',
        children: [
          { id: 'm-179', name: '【说明书】超静音窗帘电机（DB28）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/FeKgwmuqaiuUwQkf8ZscuM7rnIc' }
        ],
      },
      {
        id: 'sub-180',
        name: '3D光影窗帘电机',
        type: 'category',
        children: [
          { id: 'm-181', name: '【说明书】3D光影智能窗帘（W10MZ）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/QvVRwETUai4TB3kpfTKcCDZknMf' },
          { id: 'm-182', name: '【说明书】3D光影智能窗帘（W20MZ）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/RWkowF9SfiQVnBkiJ6YcXgLfneg' }
        ],
      },
      {
        id: 'sub-183',
        name: '精筑电机',
        type: 'category',
        children: [
          { id: 'm-184', name: '【说明书】精筑系列智能窗帘电机', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/WYUgwkvGXibi63kMI4ycN9o7nUf' },
          { id: 'm-185', name: '【说明书】精筑系列智能窗帘电机II', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/XLfewrIvGi3r0ok4XAHcwuAGnof' }
        ],
      },
      {
        id: 'sub-186',
        name: '银河电机',
        type: 'category',
        children: [
          { id: 'm-187', name: '【说明书】银河系列智能窗帘电机（动力款）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/TecXw5tgsikgFnkpzaoc1LsQnFg' }
        ],
      },
      {
        id: 'sub-188',
        name: '卷帘',
        type: 'category',
        children: [
          { id: 'm-189', name: '【说明书】ZigBee智能管状电机（G35)', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/LtVbwayRCiYGIbkWPcrcX5Mjnih' }
        ],
      }
    ],
  },
  {
    id: 'cat-190',
    name: '智能控制器',
    type: 'category',
    icon: 'Cpu',
    children: [
      {
        id: 'sub-191',
        name: '多功能控制盒',
        type: 'category',
        children: [
          { id: 'm-192', name: '【说明书】24-多功能控制盒电子版说明书 V0.1-211206', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/D8sZwUT3XiTSKRk3A0zcxZavnVq' },
          { id: 'm-193', name: '【说明书】新风控制盒（爱迪士版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/XMXqwV3v1igfI0kr3WdcZjmCnUh' }
        ],
      },
      {
        id: 'sub-194',
        name: 'AirMaster',
        type: 'category',
        children: [
          { id: 'm-195', name: '【说明书】AirMaster max 2022', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/TZxSw30wyi4ECfkAhu0cln3vn2d' },
          { id: 'm-196', name: '【说明书】AirMaster Max', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/RGE2wgUYUiPEuQkQ895cg3ZlnZc' },
          { id: 'm-197', name: '【说明书】AirMaster Pro说明书', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/YbZDw7UtSiRAqKkdF6LcgBdon5g' },
          { id: 'm-198', name: '【说明书】AirMaster SE产品说明书', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/HaUDwuyTzi0PXSkgODRcB5dXnvc' },
          { id: 'm-199', name: '【说明书】AirMaster(多合一版)使用说明书', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/BIuowEt95i4YHRkoA81cF5ibnmR' }
        ],
      },
      {
        id: 'sub-200',
        name: '空调控制面板',
        type: 'category',
        children: [
          { id: 'm-201', name: '【说明书】三合一温控面板（英文版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/DfNOwq2iOijGdgkGRyPcI0MXnoh' }
        ],
      },
      {
        id: 'sub-202',
        name: '485控制盒',
        type: 'category',
        children: [
          { id: 'm-203', name: '【说明书】ZigBee转485控制盒', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/TLifwagGyi9kWtkI53scCbWonQg' }
        ],
      },
      {
        id: 'sub-204',
        name: '地暖面板',
        type: 'category',
        children: [
          { id: 'm-205', name: '【说明书】中央地暖面板（水暖）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/HND4wRxcJicA7OknGW8cb8ZQnlc' }
        ],
      }
    ],
  },
  {
    id: 'cat-206',
    name: '可视对讲',
    type: 'category',
    icon: 'Video',
    children: [
      {
        id: 'sub-207',
        name: '智能门口机',
        type: 'category',
        children: [
          { id: 'm-208', name: '【说明书】刷卡门禁机', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/K44NwnS4ciQi7vkmZPlcR6D4nyg' },
          { id: 'm-209', name: '【说明书】智能门口机', type: 'manual', url: 'http://zaq29kpjbx.feishu.cn/wiki/OlgDwcv10iWVzwkr4RXcIAXMnkc' },
          { id: 'm-210', name: '【说明书】别墅门口机', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/C03vw0h4QikRD1kZkCcc6Qmfn5d' },
          { id: 'm-211', name: '【说明书】智能门口机 S8', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/WLmFwctnOi2VjZkbku5c3tDxnHc' },
          { id: 'm-212', name: '【说明书】智能门口机 S8 英文', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/USFuwxTlBiUEpzkDVZSc5cqDnfb' }
        ],
      }
    ],
  },
  {
    id: 'cat-213',
    name: '智能晾晒',
    type: 'category',
    icon: 'Shirt',
    children: [
      {
        id: 'sub-214',
        name: '旗舰版晾衣架',
        type: 'category',
        children: [
          { id: 'm-215', name: '【说明书】智能晾衣架', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/YMJXwRj5uii436kkbnlcXAE1n1b' }
        ],
      },
      {
        id: 'sub-216',
        name: '斯巴达系列晾衣架',
        type: 'category',
        children: [
          { id: 'm-217', name: '【说明书】斯巴达智能晾衣架', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/RDKwwBP6jivV1GkZynkcQ62jnHb' }
        ],
      }
    ],
  },
  {
    id: 'cat-218',
    name: '智能浴霸',
    type: 'category',
    icon: 'Droplets',
    children: [
      {
        id: 'sub-219',
        name: '四恒浴霸',
        type: 'category',
        children: [
          { id: 'm-220', name: '【说明书】四恒空气站智能浴霸', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Buc7wLi0BixrUwkJ0aMc6yAVnVe' }
        ],
      },
      {
        id: 'sub-221',
        name: '浴霸C1',
        type: 'category',
        children: [
          { id: 'm-222', name: '【说明书】欧瑞博智能浴霸C1', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/L7tOwhpoyiYhPxkoET5cMYMenwh' }
        ],
      }
    ],
  },
  {
    id: 'cat-223',
    name: '智能健康生活电器',
    type: 'category',
    icon: 'Heart',
    children: [
      {
        id: 'sub-224',
        name: '扫地机R2',
        type: 'category',
        children: [
          { id: 'm-225', name: '【说明书】自动集尘扫拖机器人R2', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/KLZBw39DGi7glrk8PmrcBpdjnae?from=space_search' }
        ],
      },
      {
        id: 'sub-226',
        name: '扫地机R1',
        type: 'category',
        children: [
          { id: 'm-227', name: '【说明书】智能扫拖机器人R1', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/PupMw1oZFi1TZWkHeeMcC7BZniG' }
        ],
      },
      {
        id: 'sub-228',
        name: '扫地机S2',
        type: 'category',
        children: [
          { id: 'm-229', name: '【说明书】集尘宝扫地机说明书 S2', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/LvNUwQHjvi6JKkk64Fac3Bt2nId' }
        ],
      }
    ],
  },
  {
    id: 'cat-230',
    name: '智能影音',
    type: 'category',
    icon: 'Speaker',
    children: [
      {
        id: 'sub-231',
        name: '吸顶音箱',
        type: 'category',
        children: [
          { id: 'm-232', name: '【说明书】吸顶式背景音乐音箱 BM2', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/HFYHwBzqbirTNWkCYFGciNjpnNh' }
        ],
      },
      {
        id: 'sub-233',
        name: '壁挂音箱系列',
        type: 'category',
        children: [
          { id: 'm-234', name: '【说明书】壁挂音箱ArtisBox Play（HiFi版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/NMwbwqAXbisjhukm61NcvgMdnqd' },
          { id: 'm-235', name: '【说明书】壁挂音箱ArtisBox mini', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/UH08wQDS0idxbzknbs2cjhrhnne' }
        ],
      }
    ],
  },
  {
    id: 'cat-236',
    name: '全屋网络',
    type: 'category',
    icon: 'Wifi',
    children: [
      {
        id: 'sub-237',
        name: 'MixRouter路由',
        type: 'category',
        children: [
          { id: 'm-238', name: '【说明书】MixRoutrt全屋WIFI6路由面板套装', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/XYSjwOB8Qis4APkZWn5czy6unnc?from=from_parent_docs' }
        ],
      }
    ],
  },
  {
    id: 'cat-239',
    name: '集成空调主机',
    type: 'category',
    icon: 'Thermometer',
    children: [
      {
        id: 'sub-240',
        name: 'MixStation W系列主机',
        type: 'category',
        children: [
          { id: 'm-241', name: '【说明书】MixStationW1', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/EPKjw7JLli8wqUkfeDrcgrUJnae' },
          { id: 'm-242', name: '【说明书】MixStation W135', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/RnqWw29mlirCW5k9EyVcmdxmnTc' },
          { id: 'm-243', name: '【说明书】MixStation W260', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/K8ZLwrNj9iYwk4knDCfc8xh6nMf' },
          { id: 'm-244', name: '【说明书】MixStation W180', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/TdJXwHU8bizCDZkwcsCcRel9n7d' },
          { id: 'm-245', name: '【说明书】MixStation W300', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/KooEwdwUBiY4DqkN4nxc77ImnDg' }
        ],
      },
      {
        id: 'sub-246',
        name: 'MixStation V系列主机',
        type: 'category',
        children: [
          { id: 'm-247', name: '【说明书】V180主机说明书', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/OibRwJXHSixD9MkGKQGcJnkrnxc' }
        ],
      },
      {
        id: 'sub-248',
        name: 'MixStation S系列主机',
        type: 'category',
        children: [
          { id: 'm-249', name: '【说明书】MixStation S350L', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/VMG1wXNX0iIGiUkXc5HcWNIAnXc' }
        ],
      }
    ],
  },
  {
    id: 'cat-250',
    name: '集成空调末端',
    type: 'category',
    icon: 'Wind',
    children: [
      {
        id: 'sub-251',
        name: '水箱',
        type: 'category',
        children: [
          { id: 'm-252', name: '【说明书】Mixstation增程箱电子说明书', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/L6pRwRVTtiP1wmkhmB9crghynvf' }
        ],
      },
      {
        id: 'sub-253',
        name: '水泵',
        type: 'category',
        children: [
          { id: 'm-254', name: '【说明书】欧瑞博变频模块机安装使用说明书', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/P6wwwcVociSMLwk1N9jccL9wnsc' }
        ],
      },
      {
        id: 'sub-255',
        name: '地暖模块',
        type: 'category',
        children: [
          { id: 'm-256', name: '【说明书】地暖模块', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/IRq8wmsIVipzCSkuoZXcZ1QHnJd' }
        ],
      },
      {
        id: 'sub-257',
        name: '新风模块',
        type: 'category',
        children: [
          { id: 'm-258', name: '【说明书】MixStation 新风模块', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/WNkiw0Jt5iGU7BkTJHCc0y10nCF' }
        ],
      },
      {
        id: 'sub-259',
        name: '热水模块',
        type: 'category',
        children: [
          { id: 'm-260', name: '【说明书】V180热水模块', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/XskqwPOVDiBxdPkG0QRcm9p3nhf' }
        ],
      },
      {
        id: 'sub-261',
        name: '风管式室内机',
        type: 'category',
        children: [
          { id: 'm-262', name: '【说明书】V180室内机', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/QDYXwJoJ8iAUZpktkDkchxqSnzh' }
        ],
      }
    ],
  },
  {
    id: 'cat-263',
    name: '智能安防',
    type: 'category',
    icon: 'Shield',
    children: [
      {
        id: 'sub-264',
        name: '巨目摄像头',
        type: 'category',
        children: [
          { id: 'm-265', name: '【说明书】巨目2K智能摄像机S1', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/LsmAwYIGSijWgOkGbocc4MMgnZe' },
          { id: 'm-266', name: '【说明书】巨目智能室外摄像机S3', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/QgojwtEL2imNL7k1mVJcGaN1nlR' },
          { id: 'm-267', name: '【说明书】巨目超清AI摄像机S1Pro', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/RxhmwtuzXi9xadk5eM4cYpLBnAh' }
        ],
      },
      {
        id: 'sub-268',
        name: '大白摄像头',
        type: 'category',
        children: [
          { id: 'm-269', name: '【说明书】大白智能摄像机C1', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/O8OFw20R3ilKAPkqqJucD72znWg' }
        ],
      },
      {
        id: 'sub-270',
        name: '门窗传感器',
        type: 'category',
        children: [
          { id: 'm-271', name: '【说明书】门窗传感器SM11', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/I6fywZDyDijDQTkXF2tcZXfgn7c' },
          { id: 'm-272', name: '【说明书】窗开关传感器SM20（电信版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/WLiEwJsABiQjFPki7C1cPUzenLc' }
        ],
      },
      {
        id: 'sub-273',
        name: '人体传感器',
        type: 'category',
        children: [
          { id: 'm-274', name: '【说明书】人体传感器SN11', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/CEEDwGRSiiXAzcka0JmcnKHinne' },
          { id: 'm-275', name: '【说明书】人体传感器SN20（电信版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/X7PSwp2EdipVJ0kEc48cezpSnIg' },
          { id: 'm-276', name: '【说明书】人体状态传感器S361', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/FADBwavkiihjHIkWmeWcdLWsnqe' },
          { id: 'm-277', name: '【说明书】人体状态传感器 S360说明书', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/AwonwwVwyil8swklu4vckNVvnWb' }
        ],
      },
      {
        id: 'sub-278',
        name: '气体报警器',
        type: 'category',
        children: [
          { id: 'm-279', name: '【说明书】智能一氧化碳报警器', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/DouGw5gTGibdDHkvzEEcbrNtnGd' },
          { id: 'm-280', name: '【说明书】智能可燃气报警器', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/N5ORwsxSLiVom8kB0Lec7bM5nmh' }
        ],
      },
      {
        id: 'sub-281',
        name: '紧急按钮',
        type: 'category',
        children: [
          { id: 'm-282', name: '【说明书】智能紧急按钮', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/GlNvwqhLtiX2tCkCptjc0ELNnjf' }
        ],
      },
      {
        id: 'sub-283',
        name: '烟雾报警器',
        type: 'category',
        children: [
          { id: 'm-284', name: '【说明书】智能烟雾报警器', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/H7H1wA2eWiuxcnkI3bcc3zr0nEc' }
        ],
      },
      {
        id: 'sub-285',
        name: 'NVR录像机',
        type: 'category',
        children: [
          { id: 'm-286', name: '【说明书】家庭数字录像机NVR', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/TTD5wMYl5il10Jky6RocveAmnZg' }
        ],
      },
      {
        id: 'sub-287',
        name: '水浸传感器',
        type: 'category',
        children: [
          { id: 'm-288', name: '【说明书】智能水浸探测器SW30', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/FSXxwwtjBiDaBfkRXWScVt7kn1e' }
        ],
      },
      {
        id: 'sub-289',
        name: '温湿度传感器',
        type: 'category',
        children: [
          { id: 'm-290', name: '【说明书】智能温湿度探测器', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/BO3QwbSZOitgZhkirR3ctN5OnGb' }
        ],
      },
      {
        id: 'sub-291',
        name: '传感器接入盒',
        type: 'category',
        children: [
          { id: 'm-292', name: '【说明书】传感器接入盒电子', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/SCXrwlAhTiLYrxkNBwucSZNInTg' }
        ],
      }
    ],
  },
  {
    id: 'cat-293',
    name: '智能照明',
    type: 'category',
    icon: 'Lightbulb',
    children: [
      {
        id: 'sub-294',
        name: 'S磁吸泛光',
        type: 'category',
        children: [
          { id: 'm-295', name: '【说明书】智能磁吸泛光灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/JQ1NwzbtaiJ5SHk2gqvcqc1hn2e' }
        ],
      },
      {
        id: 'sub-296',
        name: '智能灯带控制器',
        type: 'category',
        children: [
          { id: 'm-297', name: '【说明书】高性能智能灯带控制器', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/VuVZwf9o9i59F8kUGUKcMVMXn5b' },
          { id: 'm-298', name: '【说明书】智能灯带控制器二代（120W）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/LPY1wyd6piulrBk8vq4cjcNvnkh' },
          { id: 'm-299', name: '【说明书】智能灯带控制器200W', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/FVz3wEMa8iS1KhkzLancNPpZnNg' }
        ],
      },
      {
        id: 'sub-300',
        name: '智能格栅灯S10系列',
        type: 'category',
        children: [
          { id: 'm-301', name: '【说明书】SOPRO智能格栅灯S10（10W）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/IgeJwX8X2ilw61kWckrcv4cpnnb' },
          { id: 'm-302', name: '【说明书】SOPRO偏光洗墙灯S10（嵌入式10W）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/QQsqwe8G8i3urDk4FxRch7Lxnmc' },
          { id: 'm-303', name: '【说明书】SOPRO智能格栅灯S10（20W）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Ti9YwoG1UinATrk6VMYcec7Fnyc' },
          { id: 'm-304', name: '【说明书】SOPRO 偏光洗墙灯S10 （20W）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/W6nFwJkGsiRUQhkCRuTcRBjknjb' }
        ],
      },
      {
        id: 'sub-305',
        name: '智能射灯S10系列',
        type: 'category',
        children: [
          { id: 'm-306', name: '【说明书】SOPRO智能射灯S10圆形嵌装款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/KRViwCNZ1iPF2ckEPbQcmslonTe' },
          { id: 'm-307', name: '【说明书】SOPRO智能射灯S10圆形预埋款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/M5IQwUeEri6Kg9kbrjhcVnRQnKg' },
          { id: 'm-308', name: '【说明书】SOPRO 智能射灯S10方形嵌装款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/TQdKwpbsriZ04VkmcILcZutQnXW' },
          { id: 'm-309', name: '【说明书】SOPRO 智能射灯S10方形预埋款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/OeOvwsqI8ia8T6k67IkcZgySn4b' }
        ],
      },
      {
        id: 'sub-310',
        name: '智能防水筒灯S10系列',
        type: 'category',
        children: [
          { id: 'm-311', name: '【说明书】SOPRO 防水筒灯S10', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/ItNDwHiNMimhNZkg6XLcqtxPn1d' }
        ],
      },
      {
        id: 'sub-312',
        name: '声画氛围灯带',
        type: 'category',
        children: [
          { id: 'm-313', name: '【说明书】声画氛围灯带(120Hz发烧版)', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/SquKwCa8ri4nqIklx2OcxxWtnub' }
        ],
      },
      {
        id: 'sub-314',
        name: '刀锋磁吸吊灯',
        type: 'category',
        children: [
          { id: 'm-315', name: '【说明书】刀锋超薄智能磁吸吊灯 S20（明眸）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/VD0Ow9QDVi9Sz8kejvBcw6cKnic' }
        ],
      },
      {
        id: 'sub-316',
        name: '刀锋磁吸泛光',
        type: 'category',
        children: [
          { id: 'm-317', name: '【说明书】刀锋超薄智能磁吸泛光灯 S20', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Pcdyw8tCbiR6JLkdA9uc0Buhndd' }
        ],
      },
      {
        id: 'sub-318',
        name: '刀锋磁吸格栅',
        type: 'category',
        children: [
          { id: 'm-319', name: '【说明书】刀锋超薄智能磁吸格栅灯 S20', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/YS5JwcEFUikGjoknbHucAuFInke' }
        ],
      },
      {
        id: 'sub-320',
        name: '刀锋磁吸射灯',
        type: 'category',
        children: [
          { id: 'm-321', name: '【说明书】刀锋超薄智能磁吸射灯 S20', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/QrG7w0MegiD9vUk9dmicluNgnFd' }
        ],
      },
      {
        id: 'sub-322',
        name: '刀锋磁吸折叠格栅',
        type: 'category',
        children: [
          { id: 'm-323', name: '【说明书】刀锋超薄智能磁吸折叠格栅灯 S20', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/EyEmwZzaXi7QpdkwqbAcwxDen5b' }
        ],
      },
      {
        id: 'sub-324',
        name: 'S3筒射灯',
        type: 'category',
        children: [
          { id: 'm-325', name: '【说明书】防眩智能射灯 S3', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/KmNAwQ4lkiz7Opkf8o0cA7Gcnkj' },
          { id: 'm-326', name: '【说明书】超薄智能射灯 S3', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/LMLDwzndNiqBA4kV3R8cNpdmnfh' },
          { id: 'm-327', name: '【说明书】超薄智能筒灯S3', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/ZcTywl2VEiAGQnklkt8cFUvPnFI' },
          { id: 'm-328', name: '【说明书】超薄智能筒灯S3', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/ZcTywl2VEiAGQnklkt8cFUvPnFI?fromScene=spaceOverview' }
        ],
      },
      {
        id: 'sub-329',
        name: '无影双色温灯带',
        type: 'category',
        children: [
          { id: 'm-330', name: '【说明书】双色温金属洗墙灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/A8oXwI7nkiQOddksiF9cRqvfnnd' }
        ],
      },
      {
        id: 'sub-331',
        name: '柔光筒射灯',
        type: 'category',
        children: [
          { id: 'm-332', name: '【说明书】防眩智能射灯（智控柔光系列）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/QlDmwP0Qzi8gbtkpR2UcNg1Cnch' },
          { id: 'm-333', name: '【说明书】防眩智能筒灯（智控柔光系列）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/ZvnUwWVEnib4NykuUFhcsdSvnCf' }
        ],
      },
      {
        id: 'sub-334',
        name: 'Q10筒射灯',
        type: 'category',
        children: [
          { id: 'm-335', name: '【说明书】Q10深防眩射灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Bt1OwGkIIiXdFKkyJsec9kzPnVe' }
        ],
      },
      {
        id: 'sub-336',
        name: '智能吸顶灯',
        type: 'category',
        children: [
          { id: 'm-337', name: '【说明书】智能吸顶灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/B0Vbwlq7BigLdykTbzKciZ2TnXg' }
        ],
      },
      {
        id: 'sub-338',
        name: 'COB超亮灯带S10',
        type: 'category',
        children: [
          { id: 'm-339', name: '【说明书】SOPRO智能COB超亮灯带S10电子说明书', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/OYE9wfMZMiLCp7kAtd9cdVxPn2g' }
        ],
      },
      {
        id: 'sub-340',
        name: 'RGB控制盒',
        type: 'category',
        children: [
          { id: 'm-341', name: '【说明书】RGB控制盒', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/UKzMwVhzKiVJpDk1xIYcrTuznyb' }
        ],
      },
      {
        id: 'sub-342',
        name: '0-10V筒射灯',
        type: 'category',
        children: [
          { id: 'm-343', name: '【说明书】0-10V 防眩射灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/E7b7wIuUgiLdavkg0sPcHJuTnvf' },
          { id: 'm-344', name: '【说明书】0-10V 防眩筒灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/KKyWwLwwRilLbykPwfwc7WNyn6e' }
        ],
      },
      {
        id: 'sub-345',
        name: '0-10V调光模块',
        type: 'category',
        children: [
          { id: 'm-346', name: '【说明书】智能调光模块柔光系列', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/PEp4wQFxNiLWmUkBZTCcpH2fnqf' }
        ],
      },
      {
        id: 'sub-347',
        name: '苍穹Pro',
        type: 'category',
        children: [
          { id: 'm-348', name: '【说明书】苍穹灯PRO', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/YeB6wQR7ziVfE5kI4WZcXE3Zn5d' }
        ],
      },
      {
        id: 'sub-349',
        name: '苍穹筒射灯',
        type: 'category',
        children: [
          { id: 'm-350', name: '【说明书】苍穹智能筒灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/UhtOwztXKizzb8klEj9c5650nae' },
          { id: 'm-351', name: '【说明书】苍穹智能射灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Knz5wXX58iyLbhkX3i3cFqe8npd' }
        ],
      },
      {
        id: 'sub-352',
        name: '包豪斯壁灯',
        type: 'category',
        children: [
          { id: 'm-353', name: '【说明书】SOPRO 智能壁灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/MFZTwQ5n4iew8aku181cgEufnSf' }
        ],
      },
      {
        id: 'sub-354',
        name: '包豪斯餐吊灯',
        type: 'category',
        children: [
          { id: 'm-355', name: '【说明书】SOPRO 智能餐吊灯1200mm', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/BXJ8wXAobiOEm1kteIicWUVOnje' },
          { id: 'm-356', name: '【说明书】SOPRO 智能餐吊灯1200mm', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/BXJ8wXAobiOEm1kteIicWUVOnje?fromScene=spaceOverview' }
        ],
      },
      {
        id: 'sub-357',
        name: '智能落地灯',
        type: 'category',
        children: [
          { id: 'm-358', name: '【说明书】SOPRO智能落地灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/PV5MwHNM1iPp6JkIoencDEWBnnd' },
          { id: 'm-359', name: '【说明书】SOPRO智能落地灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/PV5MwHNM1iPp6JkIoencDEWBnnd?fromScene=spaceOverview' }
        ],
      },
      {
        id: 'sub-360',
        name: '苍穹智能灯带',
        type: 'category',
        children: [
          { id: 'm-361', name: '【说明书】苍穹智能灯带（5米套装）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/E4XHwFvtRinV9lkCXlIcwAJknnd?fromScene=spaceOverview' },
          { id: 'm-362', name: '【说明书】苍穹智能灯带（5米套装）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/E4XHwFvtRinV9lkCXlIcwAJknnd?fromScene=spaceOverview' },
          { id: 'm-363', name: '【说明书】苍穹智能灯带（5米套装）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/E4XHwFvtRinV9lkCXlIcwAJknnd' }
        ],
      },
      {
        id: 'sub-364',
        name: 'S5射灯',
        type: 'category',
        children: [
          { id: 'm-365', name: '【说明书】SOPRO 智能射灯 S5 方形嵌装款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/STrvwTu8FikXpVkGQKAcish4nIc' },
          { id: 'm-366', name: '【说明书】SOPRO 智能射灯 S5 圆形嵌装款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/M72dwwOqPimfx9k6OU2cgNFanFh' },
          { id: 'm-367', name: '【说明书】SOPRO 智能射灯 S5 方形预埋款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/MvzMwLszLiyzdxk1AW5cMutXnCf' },
          { id: 'm-368', name: '【说明书】SOPRO 智能射灯 S5 圆形预埋款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/SXyDwxmisiKHl4klXjfcN3PznPd' },
          { id: 'm-369', name: '【说明书】SOPRO 智能射灯 S5 方形双头嵌装款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/DIuqwwbabiwPW3kwNilcRI54nNc' },
          { id: 'm-370', name: '【说明书】SOPRO 智能射灯 S5 方形双头预埋款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/TMV2wWMdtiB9mEkTEoWcIT1On5d' },
          { id: 'm-371', name: '【说明书】SOPRO 智能射灯 S5 圆形嵌装款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/M72dwwOqPimfx9k6OU2cgNFanFh' }
        ],
      },
      {
        id: 'sub-372',
        name: 'RGB灯带',
        type: 'category',
        children: [
          { id: 'm-373', name: '【说明书】幻彩智能灯带Plus -2米套装', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/G5ElwjEmfiKvYLkkVRec3IR6nJb' }
        ],
      },
      {
        id: 'sub-374',
        name: 'S0筒射灯',
        type: 'category',
        children: [
          { id: 'm-375', name: '【说明书】欧瑞博S0射灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/O4frwl5M3ibt4Akw9lEchlgAnxc' },
          { id: 'm-376', name: '【说明书】欧瑞博S0筒灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/TwcuwsWz2iNxD7kyFQ9c2yJGnnb' }
        ],
      },
      {
        id: 'sub-377',
        name: 'Q5筒射灯',
        type: 'category',
        children: [
          { id: 'm-378', name: '【说明书】Q5鹦鹉螺护眼筒灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/BhZYwUCHBi5g9EkQjTGcJR1nngf' },
          { id: 'm-379', name: '【说明书】Q5鹦鹉螺护眼射灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Evp6w232Ki5KO2kLzHjcV91tnof' }
        ],
      },
      {
        id: 'sub-380',
        name: 'Q3筒射灯',
        type: 'category',
        children: [
          { id: 'm-381', name: '【说明书】Q3护眼筒灯（智能版）', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/MfSMwvlg7iqSqjkaKAjcir2RnLc' },
          { id: 'm-382', name: '【说明书】Q3护眼射灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/RTvlwOtmRiR8yOk4mAFctlVJnze' }
        ],
      },
      {
        id: 'sub-383',
        name: 'S磁吸格栅',
        type: 'category',
        children: [
          { id: 'm-384', name: '【说明书】智能磁吸格栅灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/AmT5wLov1iS0tukajo5cUwZbnKh' },
          { id: 'm-385', name: '【说明书】智能磁吸弯头格栅灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/D6mtwQbcbibnzGkDaDdcfsNmnjf' }
        ],
      },
      {
        id: 'sub-386',
        name: 'S磁吸射灯',
        type: 'category',
        children: [
          { id: 'm-387', name: '【说明书】智能磁吸射灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/RkK5wWu3ri8yKvkvfT7cMU4Vneg' }
        ],
      },
      {
        id: 'sub-388',
        name: '磁吸灯配件',
        type: 'category',
        children: [
          { id: 'm-389', name: '【说明书】刀锋超薄磁吸轨道电源 S20', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/ZfzIwaDK4iARwRkJDrNcMEGHnQh' }
        ],
      },
      {
        id: 'sub-390',
        name: '银河系列射灯',
        type: 'category',
        children: [
          { id: 'm-391', name: '【说明书】银河智能射灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/FYLlwvVAEio4tzkcfTZc2Fa4n0S' },
          { id: 'm-392', name: '【说明书】银河智能射灯预埋款', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/PNGww2y7Uia1f8kvyOQc2ALwnlc' }
        ],
      },
      {
        id: 'sub-393',
        name: '银河系列筒灯',
        type: 'category',
        children: [
          { id: 'm-394', name: '【说明书】银河智能筒灯', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/XWPcwaEWti84p6kWzYlcHt27nkd' }
        ],
      }
    ],
  },
  {
    id: 'cat-395',
    name: '智能卫浴',
    type: 'category',
    icon: 'Bath',
    children: [
      {
        id: 'sub-396',
        name: 'MixPad Mirror浴室镜',
        type: 'category',
        children: [
          { id: 'm-397', name: '【说明书】MixMirror智能浴室镜', type: 'manual', url: 'https://zaq29kpjbx.feishu.cn/wiki/Nr4owGQ2Fi1zA8kbAdvco93rn5g?from=from_parent_docs' }
        ],
      }
    ],
  }
];

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
