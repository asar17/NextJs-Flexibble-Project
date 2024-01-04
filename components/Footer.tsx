import Link from 'next/Link'
import Image from 'next/image'
import {footerLinks} from '../constant/index'

const Footer = () => {
    type ColumProps = {
        title: String
        links: Array<string>
    }
    const FooterColum = ({title,links}:ColumProps) =>{
        
             for(let i=0; i<=footerLinks.length; i++){
                return(
                <div className="footer_column ">
                    <div className="flex flex-col gap-5 ">
                        <h4 className="font-semibold">{title}</h4>
                        <ul className="flex flex-col text-xs gap-2">
                            {links.map((link)=>(
                                <Link href="/"  >{link}</Link>
                            ))}
                        </ul>
                    </div>
                    
                </div>
                )
                
             }
                
        
    }
    


          
  
    return(
        <section className="footer flexStart">
            <div className="flex flex-col gap-12  w-full ">
                {/* first child */}
                <div className="flex flex-col gap-4 ">
                    <Link href="/">
                        <Image
                          src='/logo-purple.svg'
                          width={113}
                          height={38}
                          alt="logo"
                        />
                    </Link>
                    <p className="text-start text-sm font-normal max-w-xs ">
                       Flexibble is the world&apos;s leading community for creatives to share, grow, and get hired.
                    </p>
                </div>

                {/* second child */}
                <div className="flex flex-wrap gap-12">
                    {footerLinks.map((link)=>(
                            <FooterColum title={link.title} links={link.links}/>

                    ))}        
                </div>
                {/* third child */}
                <div className="flexBetween footer_copyright ">
                    <p>@ 2023 Flexibble. All right reserved</p>
                    <p className="text-gray">
                        <span className="text-black font-semibold">10.214 </span>
                        projects submitted
                    </p>
                </div>
            </div>
        </section>
    )

}
export default Footer;