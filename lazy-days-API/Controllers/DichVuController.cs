using Dapper;
using lazy_days_API.Models;
using Microsoft.AspNetCore.Connections;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

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
                return NotFound("Error");
            }

        }
        [HttpPost("RegisterHS")]
        public IActionResult RegisterHS([FromBody] Form DetailRegistration)
        {
            return Ok(DetailRegistration);
        }

    }
}
