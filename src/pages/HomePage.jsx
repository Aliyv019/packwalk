import logo from "../components/img/logo.png";
import logout from "../components/img/logout.svg";
import hotelmarker from "../components/img/marker-hotel.png";
import mallmarker from "../components/img/marker-mall.png";
import Mapview from "../components/Mapview";
import qrcode from "../components/img/qrcode.png";

export default function MainPage() {
  // var map = L.map('map').setView([51.505, -0.09], 13);
  return (
    <div >
      <nav className="px-[15px] py-[5px] justify-between flex items-center">
        <img src={logo} className="w-[80px] " alt="" />
        <div className="flex items-center justify-between gap-[10px]">
          <select name="langcontainer" className="min-w-20 p-[5px] w-full rounded-[10px] flex items-center flex-col"> 
            <option value="Tr">Türkçe</option>
            <option value="Az">Azərbaycanca</option>
            <option value="Eng">English</option>
          </select>
          <button className="p-[15px] rounded-xl bg-[#ff0000] justify-center items-center flex logout_btn">
            <img src={logout} alt="" className="text-white min-w-[16px]" />
          </button>
        </div>
      </nav>
      <p className=" mt-[25px] mb-[15px] mx-auto w-[95%]">Hoş geldiniz <b>Tahir Aliyev!</b></p>
      <Mapview />
      <div>
        <span className="flex items-center pt-[10px] pl-[15px]">
          <img src={hotelmarker} alt="" className="w-[30px] h-[30px]" />
          <b>Pack&Walk-la işbirliği yapan oteller</b>
        </span>
        <span className="flex items-center pt-[10px] pl-[15px]">
          <img src={mallmarker} alt="" className="w-[30px] h-[30px]" />
          <b>Pack&Walk kutuları</b>
        </span>
      </div>
      <div className=" flex items-center justify-center pt-[20px]">
        <button className="p-[15px] text-white logout_btn rounded-xl bg-[#02a302] justify-center items-center flex "
      ><b>Yakındakı PW teslimat noktasını bul !</b></button>
      </div>
      <div className="pt-[20px] flex justify-center">
        <button className="p-[15px] text-white logout_btn rounded-xl bg-[#02a302] justify-center items-center flex flex-col">
          <b>QR okut</b>
        <img className="w-12" src={qrcode} alt="" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <button className="p-[15px] w-[45%] text-white logout_btn rounded-xl bg-[#02a302] justify-center items-center flex">
          <b>Destek</b>
        </button>
        <button className="p-[15px] w-[45%] text-white logout_btn rounded-xl bg-[#02a302] justify-center items-center flex">
          <b>Adres ekle</b>
        </button>
        <button className="p-[15px] w-[45%] text-white logout_btn rounded-xl bg-[#02a302] justify-center items-center flex">
          <b>Geçmiş</b>
        </button>
        <button className="p-[15px] w-[45%] text-white logout_btn rounded-xl bg-[#02a302] justify-center items-center flex">
          <b>Ayarlar</b>
        </button>
      </div>
    </div>
  );
}
