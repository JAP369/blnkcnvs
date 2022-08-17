import Head from 'next/head';
import Hero from '../components/Hero';
import Strategy from '../components/Strategy';
import Hero2 from '../components/Hero2';
import Featured2 from '../components/Featured2';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blank Canvas Projects™</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero
        heading='Blank Canvas Projects™'
        message='Specializes in the creation, execution & management of holistic hospitality concepts.'
      />
      <Featured2 />
      <Hero2 />
      <Strategy />
      {/* 
      <Services
        slides={SliderData}
        header='SERVICES'
        para1='Blank Canvas Projects provides a wide scope of strategic, creative,
          and operational consulting services to establish cohesive and timeless
          hospitality brands.'
        para2='Projects are engaged through a detailed analysis of each client’s
        vision and financial goals, creating unique deliverables that
        integrate core values, company culture, operational guidelines, food
        and beverage development, focused training, and the distinctive voice
        of each brand.'
      /> */}

      {/* <ServicesTemp />
      <Planning />
      <Instagram /> */}
    </div>
  );
}
