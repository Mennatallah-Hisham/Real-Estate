import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";



export default function Layout( {children} ){
    return(

        <>
<Head>
    <title>Real Estate</title>
    <meta name="description" content="Real State for renting and selling houses" />

</Head>
<Nav/>
<main>
  
{children}

</main>

<Footer/>
</>
    )

}