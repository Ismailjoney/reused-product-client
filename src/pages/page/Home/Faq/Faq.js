import React from 'react';

const Faq = () => {
    return (
        <div className='grid  my-40 grid-cols-1 md:grid-cols-2 px-10 '>
            <img className='w-96 h-96' src="https://i.ibb.co/rst9gTT/suchit-poojari-lj-Ri-Zl00n18-unsplash.jpg" alt="" />
            <div className='my-10'>
                <h1 className='text-4xl font-bold'>Frequently Asked Questions</h1>
                <details className=' mt-4 rounded-lg '>
                    <summary className="py-2 select-none font-semibold outline-none text-xl cursor-pointer">Who are we?</summary>
                    <div className="px-4 ">
                        <p>
                            <strong>ReUsedFarniture :</strong> is a site where any one can sell and buy their farniture.We are a middleware where any one can instatly post their farniture.

                        </p>

                    </div>
                </details>
                <details className='  rounded-lg '>
                    <summary className="py-2 select-none font-semibold outline-none text-xl cursor-pointer">Why should you trust us?</summary>
                    <div className="px-4 ">
                        <p>

                            We are the most reputed company in this catagory for out loaylity. We have 24/7 customer suppot .So that you can any time clear any query of yours.

                        </p>

                    </div>
                </details>
                <details className='  rounded-lg '>
                    <summary className="py-2 select-none font-semibold outline-none text-xl cursor-pointer">How long we have been in this buisness?</summary>
                    <div className="px-4 ">
                        <p>

                        ReUsedFarniture started in 2019. So three years of journey.Now we are here we tried our best for our customer statisfaction.Becasus our role is customer comes first.

                        </p>

                    </div>
                </details>
                <details className='  rounded-lg '>
                    <summary className="py-2 select-none font-semibold outline-none text-xl cursor-pointer">Does any one can sell their  ReUsedFarniture?</summary>
                    <div className="px-4 ">
                        <p>

                            Yes,but make sure when you creating a new account you must select account type seller so that you can post your add.Otherwise our system will count you as a buyer.

                        </p>

                    </div>
                </details>
            </div>
        </div>
    );
};

export default Faq;