import Link from 'next/Link'
import Image from 'next/image'
import {NavLinks} from '../constant/index'
import AuthProviders from './AuthProviders'
import { getCurrentUser } from '../lib/session';
const Navbar = async () => {
    const session= await getCurrentUser();
    console.log('session user',session?.user)
    return(
        <nav className="navbar flexBetween border-solid border-2 border-red-500">
            <div className="flexStart flex-1 gap-10 border-solid border-2 border-blue-200">
                <Link href="/">
                    <Image
                      src='/logo.svg'
                      width={116}
                      height={43}
                      alt="flexibble"
                    />
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((link)=>(
                            <Link href={link.href}>
                              { link.text}
                            </Link>
                    ))}
                </ul>
            </div>
            <div className="flexCenter gap-4 border-solid border-2 border-green-200">
                {session?.user ? (
                    <>
                       {session?.user?.image&&(
                        <Image    
                         src={session?.user?.image} 
                         width={40}  
                         height={40} 
                         alt={session?.user?.name}              
                         />
                       )}
                       <Link href="/">Share Work</Link>
                    </>
                ):(<AuthProviders/>)}
               
            </div>
        </nav>
    )

}
export default Navbar;