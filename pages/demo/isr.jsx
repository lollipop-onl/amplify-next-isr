export const getStaticProps = () => {
  return {
    props: {
      builtAt: Date.now(),
    },
    revalidate: 10,
  }
}

export default function DemoIsrPage({ builtAt }) {
  const builtTime = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    timeZone: 'Asia/Tokyo',
  }).format(new Date(builtAt))
  
  return (
    <div>
      <h1>Next.js ISR with AWS Amplify</h1>
      <p>このページは静的データ (with ISR) を使用しています</p>
      <p>ビルド時刻：{builtTime}</p>
    </div>
  )
}