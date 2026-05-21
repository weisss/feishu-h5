import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Search, Lightbulb, ToggleRight, PanelTop, Shield, Thermometer, KeyRound,
  ChevronRight, FileText, Cpu, Video, Shirt, Droplets, Heart, Speaker,
  Wifi, Wind, Bath, SlidersHorizontal,
} from 'lucide-react'
import { knowledgeData, searchManuals } from '../data/mockData'
import type { ManualNode } from '../data/mockData'

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-8 h-8" />,
  ToggleRight: <ToggleRight className="w-8 h-8" />,
  PanelTop: <PanelTop className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Thermometer: <Thermometer className="w-8 h-8" />,
  KeyRound: <KeyRound className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Video: <Video className="w-8 h-8" />,
  Shirt: <Shirt className="w-8 h-8" />,
  Droplets: <Droplets className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Speaker: <Speaker className="w-8 h-8" />,
  Wifi: <Wifi className="w-8 h-8" />,
  Wind: <Wind className="w-8 h-8" />,
  Bath: <Bath className="w-8 h-8" />,
  SlidersHorizontal: <SlidersHorizontal className="w-8 h-8" />,
}

export default function Home() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<ManualNode[]>([])
  const [searching, setSearching] = useState(false)

  const handleSearch = (val: string) => {
    setQuery(val)
    if (val.trim()) {
      setResults(searchManuals(knowledgeData, val.trim()))
      setSearching(true)
    } else {
      setResults([])
      setSearching(false)
    }
  }

  const handleManualClick = (id: string) => {
    navigate(`/manual/${id}`)
    setQuery('')
    setSearching(false)
    setResults([])
  }

  return (
    <div className="min-h-dvh bg-bg">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-surface px-4 pt-4 pb-3 shadow-sm">
        <h1 className="text-xl font-semibold text-text mb-3">产品说明书</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="搜索产品说明书..."
            className="w-full h-10 pl-9 pr-4 rounded-xl bg-bg text-sm text-text placeholder:text-text-secondary outline-none focus:ring-2 focus:ring-primary/30 transition"
          />
          {query && (
            <button
              onClick={() => handleSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary text-xs"
            >
              清除
            </button>
          )}
        </div>
      </div>

      {/* Search Results */}
      {searching && (
        <div className="px-4 py-3">
          <div className="text-xs text-text-secondary mb-2">
            {results.length > 0 ? `找到 ${results.length} 个结果` : '未找到相关说明书'}
          </div>
          {results.map((item) => (
            <button
              key={item.id}
              onClick={() => handleManualClick(item.id)}
              className="w-full flex items-center gap-3 p-3 mb-2 bg-surface rounded-xl text-left active:scale-[0.98] transition shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center text-primary shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-sm text-text flex-1">{item.name}</span>
              <ChevronRight className="w-4 h-4 text-text-secondary shrink-0" />
            </button>
          ))}
        </div>
      )}

      {/* Category Grid */}
      {!searching && (
        <div className="px-4 py-4">
          <div className="text-xs text-text-secondary mb-3">产品分类</div>
          <div className="grid grid-cols-2 gap-3">
            {knowledgeData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/category/${cat.id}`)}
                className="flex flex-col items-center justify-center gap-2 p-5 bg-surface rounded-2xl text-center active:scale-[0.96] transition shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary">
                  {cat.icon && iconMap[cat.icon] ? iconMap[cat.icon] : <FileText className="w-6 h-6" />}
                </div>
                <span className="text-sm font-medium text-text">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
