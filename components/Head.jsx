import React from "react";
import Image from "next/image";
import styles from '../styles/Home.module.css'


const Head = () => {
  return (
    <>
      <div className="bg-primary text-white bg-opacity-20 z-0 sm:visible pb-5">
        <a className="btn btn-ghost normal-case text-xl"></a>
        <section className="px-5 ml-2.5 ">
          <div className="container flexSB">
            <div className="logo flex flex-row">
              <span className={styles.logo}>
                <Image
                  src="/assets/icons/26D3.svg"
                  alt="Chains emoji"
                  width={72}
                  height={72}
                  background="transparent"
                />
              </span>
              <h1 className="clipstyle font-extrabold">AZATH-ENGSOL</h1>
            </div>
    

            <div className="social flex flex-row space-x-2">
              <i className="fab fa-linkedin icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-facebook icon"></i>
              <i className="fas fa-envelope icon"></i>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Head;
