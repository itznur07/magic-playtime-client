import CompanyCard from "./BrandsCard";

const Companys = () => {
  const companys = [
    {
      img: "https://images-workbench.99static.com/Opn6spq7G19YeEPjeRF3Nakmb_A=/99designs-contests-attachments/23/23600/attachment_23600424",
      name: "The Toy Story",
    },
    {
      img: "https://images-workbench.99static.com/f_Grn1GF9PW4iSCKmU5VWGR-DFQ=/99designs-contests-attachments/68/68466/attachment_68466414",
      name: "Toys Around Us",
    },
    {
      img: "https://images-workbench.99static.com/l20BQsocuxaOUoYnFlWb-1XSOvY=/99designs-contests-attachments/80/80402/attachment_80402256",
      name: "Eif Toys",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq27b9Hhc0r5W7LfefmBTHB0nlvtSfDpO_ILEUHFC_5LRoq0LBdcRlMS_8cFOQz2Np5Qs&usqp=CAU",
      name: "Toy Store",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgmtJxVvOxfNzhzeU0CnUOOPGe2-4vLTVtxEdQeVmbF-rEzNxTzSWELKmRtjoyAMNLpE&usqp=CAU",
      name: "Toy Shop",
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/008/422/894/small/toys-corner-logo-vector.jpg",
      name: "Toys Corner",
    },
  ];

  return (
    <>
      <h1 className='text-center pt-10 text-3xl font-bold'>Populer Brands</h1>
      <div className='flex items-center justify-between md:mx-24 mt-10 mb-10'>
        {companys.map((company) => (
          <CompanyCard img={company.img} name={company.name} />
        ))}
      </div>
    </>
  );
};

export default Companys;
