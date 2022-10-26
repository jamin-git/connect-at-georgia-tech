import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'
// import './Nav.module.css';

// Very Very basic nav / router component - Jacob

function Nav() {
    const router = useRouter()
    // return <div style={{color: "#CDD8FF", background: "linear-gradient(30deg, #CBC3E3, #030B26)", height: "100vh"}}>
    //       <div style={{display: "flex", width: "50%", paddingLeft: "2%", paddingTop:"1.5%", fontSize: "1.8rem"}}>
    //           <a onClick={ () => router.push("/") } style={{cursor: "pointer"}}><b><i>connect.</i></b></a>
    //       </div>

    //       <div style={{justifyContent: "flex-end", display: "flex",  marginTop: "-3%", marginRight: "3%"}}>
    //           <button style={{backgroundColor: "#CDD8FF", border: "none", padding: "1.5%", 
    //           display: "inline-block", borderRadius: "50%"}}></button>
    //       </div>

    //       <div style={{justifyContent: "flex-end", display: "flex", fontSize: "1.4rem",  marginTop: "2%",  marginRight: "3%"}}>
    //           <a onClick={ () => router.push("/about") } style={{cursor: "pointer"}}><b><i>about</i></b></a>
    //       </div>
          
    //       <div style={{justifyContent: "flex-end", display: "flex", fontSize: "1.4rem",  marginTop: "0%", marginRight: "3%"}}>
    //           <a onClick={ () => router.push("/app") } style={{cursor: "pointer"}}><b><i>explore</i></b></a>
    //       </div>
    // </div>
    return <div className='flex justify-between'>
        <a onClick={ () => router.push("/") } className="cursor-pointer"><p className='text-3xl font-bold p-6 italic'>connect.</p></a>
        <div className='flex flex-col items-end m-6 gap-1 italic font-bold text-xl'>
            <div className='p-6 bg-blue-100 rounded-full h-12 w-12 text-right'></div>
            <a onClick={ () => router.push("/about") } className="cursor-pointer"><p className='pt-2'>about</p></a>
            <a onClick={ () => router.push("/app") } className="cursor-pointer"><p>explore</p></a>
        </div>
    </div>
}


export default Nav;