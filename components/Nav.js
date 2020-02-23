import Link from 'next/link';
import Test from './Test.js'

export default function Nav (){
    
    return (
    <div>
        <Link href="/">
            <a className="home">Home</a>
        </Link>
        <Link href = "/about">
            <a className="about">about</a>
        </Link>

        <div className = "pops">
            <p>fuck you</p>
            <div>
                <p>fuck you 2</p>
            </div>
            <Test />
        </div>

        <style global jsx >{`
            .home {
                color:red
            }
            .pops{
                color:yellow
            }
            .pops p {
                color:blue

            }
            `}
        </style>
        
    </div>

)};