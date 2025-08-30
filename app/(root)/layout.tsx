import Navbar from '@/components/navigation/navbar'


const rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
        <Navbar />
        {children}
    </main>
  )
}

export default rootlayout