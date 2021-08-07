export const getServerSideProps = () => {
  return {
    props: {
      builtAt: Date.now(),
    },
  }
}

export default function DemoSsrPage({ builtAt }) {
  const builtTime = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    timeZone: 'Asia/Tokyo',
  }).format(new Date(builtAt))
  
  return (
    <div>
      <h1>Next.js ISR with AWS Amplify</h1>
      <p>このページはサーバーサイドレンダリングを使用しています</p>
      <p>ビルド時刻：{builtTime}</p>
    </div>
  )
}