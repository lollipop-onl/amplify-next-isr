import Link from 'next/link';

export const getStaticProps = () => {
  return {
    props: {
      builtAt: Date.now(),
    }
  }
}

export default function IndexPage({ builtAt }) {
  const builtTime = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    timeZone: 'Asia/Tokyo',
  }).format(new Date(builtAt))
  
  return (
    <div>
      <h1>Next.js ISR with AWS Amplify</h1>
      <p>このページは静的データを使用しています</p>
      <p>ビルド時刻：{builtTime}</p>
      <ul>
        <li>
          <Link href="/demo/isr">
            <a>ISR ページ</a>
          </Link>
        </li>
        <li>
          <Link href="/demo/ssr">
            <a>SSR ページ</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}