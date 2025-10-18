import Link from "next/link"

const Navigation = () =>{
    return <>
      <div  >
        <nav className="flex" >
        <h1>Fouzia</h1>
          <ul  className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">about</Link>
            <Link href="/service">service</Link>
            <Link href="/contact">contact</Link>
          </ul>
        </nav>
      </div>
    </>
}
export default Navigation