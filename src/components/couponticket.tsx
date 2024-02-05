


interface CouponProps {
  title: string;
  description: string;
}

const CouponTicket: React.FC<CouponProps> = ({ title, description }) => {
 

  return (
    <div className="mt-10 bg-[#FFFF] flex">
      <div className="flex flex-col justify-start items-center rounded-lg w-auto h-auto relative border-8 border-secondary p-4">
        <h1 className="text-secondary font-bold text-[14px]">{title}</h1>
        <p className="text-[#333]">{description}</p>
        <div className="absolute bottom-0 right-0 text-primary text-[25px] rounded-lg text-white rounded-br-lg">
          
        </div>
      </div>
    </div>
  );
};

export default CouponTicket;
