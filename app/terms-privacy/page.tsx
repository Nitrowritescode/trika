import React from 'react'


export default function termsPrivacy() {

    const principles = [
        {
            id: 1,
            title: "Accountability",
            description: "An organization is responsible for personal information under its control and shall designate an individual or individuals who are accountable for the organization's compliance with the following principles."
        },
        {
            id: 2,
            title: "Identifying Purposes",
            description: "The purposes for which personal information is collected shall be identified by the organization at or before the time the information is collected."
        },
        {
            id: 3,
            title: "Consent",
            description: "The knowledge and consent of the individual are required for the collection, use, or disclosure of personal information, except where inappropriate."
        },
        {
            id: 4,
            title: "Limiting Collection",
            description: "The collection of personal information shall be limited to that which is necessary for the purposes identified by the organization. Information shall be collected by fair and lawful means."
        },
        {
            id: 5,
            title: "Limiting Use, Disclosure, and Retention",
            description: "Personal information shall not be used or disclosed for purposes other than those for which it was collected, except with the consent of the individual or as required by law. Personal information shall be retained only as long as necessary for the fulfilment of those purposes."
        },
        {
            id: 6,
            title: "Accuracy",
            description: "Personal information shall be as accurate, complete, and up-to-date as is necessary for the purposes for which it is to be used."
        },
        {
            id: 7,
            title: "Safeguards",
            description: "Personal information shall be protected by security safeguards appropriate to the sensitivity of the information."
        },
        {
            id: 8,
            title: "Openness",
            description: "An organization shall make readily available to individuals specific information about its policies and practices relating to the management of personal information."
        },
        {
            id: 9,
            title: "Individual Access",
            description: "Upon request, an individual shall be informed of the existence, use, and disclosure of his or her personal information and shall be given access to that information. An individual shall be able to challenge the accuracy and completeness of the information and have it amended as appropriate."
        },
        {
            id: 10,
            title: "Challenging Compliance",
            description: "An individual shall be able to address a challenge concerning compliance with the above principles to the designated individual or individuals accountable for the organization's compliance."
        }
    ];

    return (
        <div>
            <div className='text-primary w-full py-4 md:py-6 lg:py-8 flex justify-center items-center'>
                <h1 className='font-bold text-4xl'>Terms & Conditions</h1>
            </div>
            <div>
                <p className='px-10 py-2 md:py-4'>
                    The information contained in this website is for general information purposes only. The information is provided by TRIKA Financials and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.

                    In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.

                    Through this website you are able to link to other websites which are not under the control of TRIKA Financials. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.

                    Every effort is made to keep the website up and running smoothly. However, TRIKA Financials takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
                </p>
            </div>
            <div className='px-10'>
                <h1 className='text-primary text-3xl font-bold text-center py-8'>PRIVACY PRINCIPLES</h1>
                {principles.map((principle) => (
                    <div key={principle.id} className='py-4 px-4 rounded-md my-4'>
                        <span className='text-primary font-semibold'>Principle {principle.id} </span>
                        - {principle.title}
                        <p>{principle.description}</p>
                    </div>
                ))}
            </div>
            <div className='font-semibold px-10 py-8'>
                <p>
                    These principles are usually referred to as “fair information principles”. They are included in the Personal Information Protection and Electronic Documents Act (PIPEDA), Canada&apos;s private-sector privacy law.
                </p>
            </div>
        </div>
    )
}