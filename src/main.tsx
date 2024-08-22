import ReactDOM from 'react-dom/client'
import MainPDF from '@/components/MainPDF.tsx'
import { PDFViewer } from '@react-pdf/renderer'
import { testHtml } from '@/constants/markdown'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PDFViewer style={{ width: '100vw', height: '100vh', border: 'none' }}>
    <MainPDF markdown={testHtml} />
  </PDFViewer>
)
