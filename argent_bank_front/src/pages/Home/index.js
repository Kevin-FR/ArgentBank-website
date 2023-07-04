import FeatureCard from "../../components/FeatureCard";
import Hero from "../../components/Hero";

import "./style.scss";


const Page = () => {
  
  
    return (
      <>
        
        <main>
         <Hero 
         imageSrc="/img/bank-tree.jpeg"
         imageAlt=""
         subtitles={['No fees.', 'No minimum deposit.', 'High interest rates.']}
         text="Open a savings account with Argent Bank today!"
          />
        <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureCard
              imageSrc="./img/icon-chat.png"
              imageAlt="Chat Icon"
              title="You are our #1 priority"
              description="Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureCard
              imageSrc="./img/icon-money.png"
              imageAlt="Chat Icon"
              title="More savings means higher rates"
              description="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureCard
              imageSrc="./img/icon-chat.png"
              imageAlt="Chat Icon"
              title="Security you can trust"
              description="We use top of the line encryption to make sure your data and money
              is always safe."
        />
        </section>

        </main>
             
        </>
    );
  };
  
  export default Page;
  