import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';

const faqs = [
  {
    question: "Процессы",
    answer: [
      {
        text: "11501П-001process of planing and analazing IMS",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/1.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%8B/11501%D0%9F-001process%20of%20planing%20and%20analazing%20IMS.pdf?updatedAt=1703414904361",
      },
      {
        text: "11501П-002 Процесс оформление поставок и учета газа- process formalization and gas metering",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/1.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%8B/11501%D0%9F-002%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%20%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BE%D0%BA%20%D0%B8%20%D1%83%D1%87%D0%B5%D1%82%D0%B0%20%D0%B3%D0%B0%D0%B7%D0%B0-%20process%20formalization%20and%20gas%20metering.pdf?updatedAt=1703414898985",
      },
      {
        text: "11501П-003 Процесс оперативного управления транспортировкой газа- Procecc of operational managment of gas transportation",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/1.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%8B/11501%D0%9F-003%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%20%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%BE%D0%B9%20%D0%B3%D0%B0%D0%B7%D0%B0-%20Procecc%20of%20operational%20managment%20of%20gas%20transportation.pdf?updatedAt=1703414902687",
      },
      {
        text: "11501П-004 Процесс траспортировки газа и эксплуатция МГ- process of gas transportation and operation main gaspipeline",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/1.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%8B/11501%D0%9F-004%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%20%D1%82%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8%20%D0%B3%D0%B0%D0%B7%D0%B0%20%D0%B8%20%D1%8D%D0%BA%D1%81%D0%BF%D0%BB%D1%83%D0%B0%D1%82%D1%86%D0%B8%D1%8F%20%D0%9C%D0%93-%20process%20of%20gas%20transportation%20and%20operation%20main%20gaspipeline.pdf?updatedAt=1703414898090",
      },
      {
        text: "11501П-005 Процесс компремирования и эксплуатация КС-Process of gs compressing and operation CS",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/1.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%8B/11501%D0%9F-005%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%20%D0%BA%D0%BE%D0%BC%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D1%8D%D0%BA%D1%81%D0%BF%D0%BB%D1%83%D0%B0%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D0%9A%D0%A1-Process%20of%20gs%20compressing%20and%20operation%20CS.pdf?updatedAt=1703414906389",
      },
    ],
  },
  {
    question: "Процедуры",
    answer: [
      {
        text: "ПИСМ-001 Процедура управления документированной информацией-control of IMS documentated information procedure",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/2.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D1%8B/%D0%9F%D0%98%D0%A1%D0%9C-001%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D0%B0%20%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B5%D0%B9-control%20of%20IMS%20documentated%20information%20procedure.pdf?updatedAt=1703414875382",
      },
      {
        text: "ПИСМ-002",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/2.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D1%8B/%D0%9F%D0%98%D0%A1%D0%9C-002.pdf?updatedAt=1703414879041",
      },
      {
        text: "ПИСМ-003",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/2.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D1%8B/%D0%9F%D0%98%D0%A1%D0%9C-003.pdf?updatedAt=1703414875254",
      },
      {
        text: "ПИСМ-004",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/2.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D1%8B/%D0%9F%D0%98%D0%A1%D0%9C-004.pdf?updatedAt=1703414874983",
      },
      {
        text: "ПИСМ-005",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/2.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D1%8B/%D0%9F%D0%98%D0%A1%D0%9C-005.pdf?updatedAt=1703414874544",
      },
      {
        text: "ПИСМ-006",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/2.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D1%8B/%D0%9F%D0%98%D0%A1%D0%9C-006.pdf?updatedAt=1703414871302",
      },
      {
        text: "ПИСМ-007",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/2.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D1%8B/%D0%9F%D0%98%D0%A1%D0%9C-007.pdf?updatedAt=1703414869028",
      },
      {
        text: "ПИСМ-008",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/2.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D1%8B/%D0%9F%D0%98%D0%A1%D0%9C-008.pdf?updatedAt=1703414870475",
      },
      {
        text: "ПИСМ-009",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/2.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D1%8B/%D0%9F%D0%98%D0%A1%D0%9C-009.pdf?updatedAt=1703414872106",
      },
      {
        text: "ПИСМ-010",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/2.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D1%8B/%D0%9F%D0%98%D0%A1%D0%9C-010.pdf?updatedAt=1703414872028",
      },
      {
        text: "ПИСМ-011",
        link: "https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/2.%20%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D0%B4%D1%83%D1%80%D1%8B/%D0%9F%D0%98%D0%A1%D0%9C-011.pdf?updatedAt=1703414881241",
      },


     
      // Add more links as needed
    ],
  },
  {
    question:"Политика",
    answer:[
      {
        text:"политика",
        link:"https://ik.imagekit.io/ay4noc1kbk/%D0%98%D0%A1%D0%9C/3.%20%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0/%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0.pdf?updatedAt=1703414880639"
      },
    ]
  },
  // More FAQ items...
];


const ISM = () => {
  return (
      <div className="mx-auto max-w-4xl ">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10  dark:divide-gray-600">
          {/* <h className="text-lg font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
          Руководящие документы
          </h> */}
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-600">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                        <span className="text-base font-semibold leading-7 dark:text-white">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <FontAwesomeIcon icon={faMinus} className="h-6 w-6" />
                          ) : (
                            <FontAwesomeIcon icon={faPlus} className="h-6 w-6" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    {faq.answer.map((link, linkIndex) => (
                      <p key={linkIndex}>
                        <a href={link.link} target="_blank" className="text-base leading-7 text-blue" rel="noreferrer">
                          {link.text}
                        </a>
                      </p>
                    ))}
                  </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
  );
};

export default ISM;
