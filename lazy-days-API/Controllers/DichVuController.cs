using Dapper;
using lazy_days_API.Models;
using Microsoft.AspNetCore.Connections;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.VisualBasic;
using System;
using System.Diagnostics;

namespace lazy_days_API.Controllers
{
    

    public class TTDP
    {
        public string? MA_PHIEU_DP { get; set; }
        public string? Ten_KH { get; set; }
        public string? SDT { get; set; }
        public string? Ma_GoiDV { get; set; }
    }

    public class ResultCheck
    {
        public TTDP? data1 { get; set; }
        public List<Chitietgdv> data2 { get; set; }
    }

    public class Form
    {
        public string? Ma_Phieu_DP { get; set; }

        public string? SDT { get; set; }

        public string? Ma_DV { get; set; }
        public int? SoLuong { get; set; }

        public int? TongTien { get; set; }

        public string? Ma_Nv { get; set; }

        public string? Loai { get; set; }

        public string? Ma_PhieuDV { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class DichVuController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public DichVuController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("HotelService")]
        public IActionResult GetHotelService()
        {
            string sqlDataSource = _configuration.GetConnectionString("Database");

            using (var conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                string query = "select * from DICHVUKHACHSAN WHERE LOAI = 'DVKS'";
                List<Dichvukhachsan> ListHotelService = conn.Query<Dichvukhachsan>(query).ToList();
                return Ok(ListHotelService);
            }
        }
        [HttpGet("Product")]
        public IActionResult GetProduct()
        {
            string sqlDataSource = _configuration.GetConnectionString("Database");

            using (var conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                string query = "select * from DICHVUKHACHSAN WHERE LOAI = 'SP'";
                List<Dichvukhachsan> ListHotelService = conn.Query<Dichvukhachsan>(query).ToList();
                return Ok(ListHotelService);
            }
        }

        [HttpGet("Tour")]
        public IActionResult GetTour()
        {
            string sqlDataSource = _configuration.GetConnectionString("Database");

            using (var conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                string query = "select TDL.*,DVLH.TEN_DV from TOURDULICH TDL join DONVILUUHANH DVLH on TDL.MA_DV = DVLH.MA_DV";
                List<Tourdulich> ListTour = conn.Query<Tourdulich>(query).ToList();
                return Ok(ListTour);
            }
        }

        [HttpGet("Check")]
        public IActionResult GetByPhone(string phone)
        {
            try
            {

                string sqlDataSource = _configuration.GetConnectionString("Database");

                using (var conn = new SqlConnection(sqlDataSource))
                {
                    conn.Open();
                    string query = "SELECT PDP.MA_PHIEU_DP,KH.TEN_KH,KH.SDT,PDP.MA_GOIDV FROM PHIEUDATPHONG PDP JOIN KHACHHANG KH ON PDP.MA_KH = KH.MA_KH AND KH.SDT = @PHONE AND PDP.TRANGTHAI <> 'Payment'";
                    TTDP PDP = conn.QueryFirstOrDefault<TTDP>(query, new { phone = phone });
                    if (PDP == null) return Ok("Not found");
                    string GoiDv = PDP.Ma_GoiDV;
                    ResultCheck res = new ResultCheck();
                    res.data1 = PDP;
                    if (GoiDv == null)
                    {
                        res.data2 = null;
                    }
                    else
                    {
                        string query2 = "select MA_DV,GIAMGIA from CHITIETGDV where MA_GOIDV = @GDV";
                        List<Chitietgdv> listGDV = conn.Query<Chitietgdv>(query2, new { GDV = GoiDv }).ToList();
                        res.data2 = listGDV;
                    }
                    return Ok(res);
                }



            }
            catch (Exception ex)
            {
                return BadRequest("Error");
            }

        }
        [HttpPost("RegisterHS")]
        public IActionResult RegisterHS([FromBody] Form DetailRegistration)
        {
            try
            {

                string sqlDataSource = _configuration.GetConnectionString("Database");

                using (var conn = new SqlConnection(sqlDataSource))
                {
                    conn.Open();
                    string query = "SELECT TOP 1 MA_PHIEUDV FROM PHIEUDANGKYDICHVU ORDER BY MA_PHIEUDV DESC";
                    string PDK = conn.QueryFirstOrDefault<string>(query);
                    if (PDK == null)
                    {
                        string maDK = "DK001";
                        DateTime today = DateTime.Today;
                        var temp = conn.Execute("INSERT INTO PHIEUDANGKYDICHVU VALUES(@MA_PDK,@NGAY_DK,@TONGTIEN,NULL,@MA_PDP,@MA_NV,@MA_DV,@SL,@LOAI)",
                            new
                            {
                                MA_PDK = maDK,
                                NGAY_DK = today,
                                TONGTIEN = DetailRegistration.TongTien,
                                MA_PDP = DetailRegistration.Ma_Phieu_DP,
                                MA_NV = DetailRegistration.Ma_Nv,
                                MA_DV = DetailRegistration.Ma_DV,
                                SL = DetailRegistration.SoLuong,
                                LOAI = DetailRegistration.Loai
                            }) ;
                        if (temp == 1) return Ok("DONE");
                        else return BadRequest();
                    }
                    else
                    {
                        string ma_PDK = PDK.Substring(2);
                        //string ma_PDK = "102";
                        int n = int.Parse(ma_PDK) + 1;
                        //string test;
                        if (n < 10) ma_PDK = $"DK00{n}";
                        if (n<100 && n>=10) ma_PDK = $"DK0{n}";
                        if (n >= 100) ma_PDK = $"DK{n}";
                        if (n >= 1000) return BadRequest();

                        DateTime today = DateTime.Today;
                        var temp = conn.Execute("INSERT INTO PHIEUDANGKYDICHVU VALUES(@MA_PDK,@NGAY_DK,@TONGTIEN,NULL,@MA_PDP,@MA_NV,@MA_DV,@SL,@LOAI)",
                            new
                            {
                                MA_PDK = ma_PDK,
                                NGAY_DK = today,
                                TONGTIEN = DetailRegistration.TongTien,
                                MA_PDP = DetailRegistration.Ma_Phieu_DP,
                                MA_NV = DetailRegistration.Ma_Nv,
                                MA_DV = DetailRegistration.Ma_DV,
                                SL = DetailRegistration.SoLuong,
                                LOAI = DetailRegistration.Loai
                            });
                        if (temp == 1) return Ok("DONE");
                        else return BadRequest();
                    }
                    
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost("RegisterTour")]
        public IActionResult RegisterTour([FromBody] FormTour DetailRegistrationTour)
        {
            try
            {

                string sqlDataSource = _configuration.GetConnectionString("Database");

                using (var conn = new SqlConnection(sqlDataSource))
                {
                    conn.Open();
                    string query = "SELECT TOP 1 MAPDKTOUR FROM PHIEUDKTOUR ORDER BY MAPDKTOUR DESC";
                    string MAPDKTOUR = conn.QueryFirstOrDefault<string>(query);
                    if (MAPDKTOUR == null)
                    {
                        string maDK = "DK001";
                        DateTime today = DateTime.Today;
                        var temp = conn.Execute("INSERT INTO PHIEUDKTOUR VALUES(@MAPDKTOUR,@THOIGIANDANGKY,@TENNGUOIDK,@SDT,@THOIGIANKHOIHANH,@EMAIL,@CMND,@SONGUOITG,@DICHVUDUADON,@TRANGTHAI,@YEUCAUDACBIET,@MATOUR,@MANV)",
                            new
                            {
                                MAPDKTOUR = maDK,
                                THOIGIANDANGKY = DetailRegistrationTour.data3.registerDate,
                                TENNGUOIDK = DetailRegistrationTour.data3.fullName,
                                SDT = DetailRegistrationTour.data3.phone,
                                THOIGIANKHOIHANH = DetailRegistrationTour.data3.departureDay,
                                EMAIL = DetailRegistrationTour.data3.email,
                                CMND = DetailRegistrationTour.data3.idCard,
                                SONGUOITG = DetailRegistrationTour.data3.numberJoin,
                                DICHVUDUADON = DetailRegistrationTour.data3.shuttle,
                                TRANGTHAI = "Wait",
                                YEUCAUDACBIET = DetailRegistrationTour.data3.request,
                                MATOUR = DetailRegistrationTour.data1,
                                MANV = "NV001"
                            });
                        foreach (var info in DetailRegistrationTour.data2)
                        {
                            var temp2 = conn.Execute("INSERT INTO TTNGUOITHAMGIA VALUES(@MAPDKTOUR,@STT,@SDT,@TENNGUOITG)",
                            new
                            {
                                MAPDKTOUR = maDK,
                                STT = info.STT,
                                SDT = info.SDT,
                                TENNGUOITG = info.TENNGUOITG
                            });
                        }
                        if (temp == 1) return Ok("DONE");
                        else return BadRequest();
                    }
                    else
                    {
                        string ma_PDK = MAPDKTOUR.Substring(2);
                        //string ma_PDK = "102";
                        int n = int.Parse(ma_PDK) + 1;
                        //string test;
                        if (n < 10) ma_PDK = $"DK00{n}";
                        if (n < 100 && n >= 10) ma_PDK = $"DK0{n}";
                        if (n >= 100) ma_PDK = $"DK{n}";
                        if (n >= 1000) return BadRequest();

                        DateTime today = DateTime.Today;
                        var temp = conn.Execute("INSERT INTO PHIEUDKTOUR VALUES(@MAPDKTOUR,@THOIGIANDANGKY,@TENNGUOIDK,@SDT,@THOIGIANKHOIHANH,@EMAIL,@CMND,@SONGUOITG,@DICHVUDUADON,@TRANGTHAI,@YEUCAUDACBIET,@MATOUR,@MANV)",
                            new
                            {
                                MAPDKTOUR = ma_PDK,
                                THOIGIANDANGKY = DetailRegistrationTour.data3.registerDate,
                                TENNGUOIDK = DetailRegistrationTour.data3.fullName,
                                SDT = DetailRegistrationTour.data3.phone,
                                THOIGIANKHOIHANH = DetailRegistrationTour.data3.departureDay,
                                EMAIL = DetailRegistrationTour.data3.email,
                                CMND = DetailRegistrationTour.data3.idCard,
                                SONGUOITG = DetailRegistrationTour.data3.numberJoin,
                                DICHVUDUADON = DetailRegistrationTour.data3.shuttle,
                                TRANGTHAI = "Wait",
                                YEUCAUDACBIET = DetailRegistrationTour.data3.request,
                                MATOUR = DetailRegistrationTour.data1,
                                MANV = "NV001"
                            });
                        foreach (var info in DetailRegistrationTour.data2)
                        {
                            var temp2 = conn.Execute("INSERT INTO TTNGUOITHAMGIA VALUES(@MAPDKTOUR,@STT,@SDT,@TENNGUOITG)",
                            new
                            {
                                MAPDKTOUR = ma_PDK,
                                STT = info.STT,
                                SDT = info.SDT,
                                TENNGUOITG = info.TENNGUOITG
                            });
                        }
                        if (temp == 1) return Ok("DONE");
                        else return BadRequest();
                    }
                    return Ok(DetailRegistrationTour);

                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

    }
}
