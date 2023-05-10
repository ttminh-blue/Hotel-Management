﻿using lazy_days_API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using lazy_days_API.Services;
using Dapper;

namespace lazy_days_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KhachHangController : ControllerBase
    {
      
        private readonly IService _sqlFactory;

        public KhachHangController(IService sqlFactory)
        {
          
            _sqlFactory = sqlFactory;
    }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            string query = @"select * from dbo.KHACHHANG";
         
            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            var result = await sqlConnection.QueryAsync(query);

            
            return new JsonResult(result);
        }

        [HttpGet("Personal")]
        public async Task<IActionResult> Get_Personal([FromQuery] string id)
        {
            string query = @"select * from dbo.KHACHHANG where ma_kh = @id";

            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            var result = await sqlConnection.QueryAsync(query, new
            {
                id = id
            });


            return new JsonResult(result);
        }
        [HttpGet("add")]
        public async Task<IActionResult> GetAL()
        {
            string query = @"select * from khachhang kh where not exists (select * from chitietphong ct where kh.MA_KH=ct.MA_KH)";

            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            var result = await sqlConnection.QueryAsync(query);
          
            return new JsonResult(result);
        }
        [HttpPost]
        public async Task<IActionResult> Post(Khachhang kh)
        {
            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();
            var allPhieuDKVC = await sqlConnection.QueryAsync("Select * from DBO.KHACHHANG WHERE CMND = @Cmnd" , new
            {
                Cmnd = kh.Cmnd
            });
            if (allPhieuDKVC.Count() >= 1)
            {
                var update_state = await sqlConnection.QueryAsync("update DBO.KHACHHANG set TRANG_THAI_DAT_PHONG = N'Đang đặt phòng' WHERE CMND = @Cmnd", new
                {
                    Cmnd = kh.Cmnd
                });
                return Ok(allPhieuDKVC);
            }
            string query = @"INSERT INTO DBO.KHACHHANG VALUES (@MA_KH, @TEN_KH, 
		@CMND, @DIA_CHI, @SDT, @Email, @Fax, @SO_DEM_LUU_TRU, @YEU_CAU_DB , N'Đang đặt phòng')";
      
            try
            {
               await sqlConnection.ExecuteAsync(query, new
               {
                   MA_KH = kh.MaKh,
                   TEN_KH = kh.TenKh,
                   CMND =  kh.Cmnd,
                   DIA_CHI= kh.DiaChi,
                   SDT = kh.Sdt,
                   Email= kh.Email,
                   Fax= kh.Fax,
                   SO_DEM_LUU_TRU= kh.SoDemLuuTru,
                   YEU_CAU_DB= kh.YeuCauDb

               });
                return new JsonResult("Add Succesfully");
            }
            catch (Exception ex)
            {
                return new JsonResult(ex.Message);
            }
        }
        [HttpPut]
        public async Task<IActionResult> Put(Khachhang kh)
        {

            string query = @"UPDATE DBO.KHACHHANG SET TRANG_THAI_DAT_PHONG = @TRANGTHAI WHERE MA_KH = @MA_KH";

            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            await sqlConnection.ExecuteAsync(query, new
            {

                TRANGTHAI = kh.TrangThaiDatPhong,
                MA_KH = kh.MaKh
            });
         
            return new JsonResult("UPDATED  Succesfully");
        }
        [HttpPut("PutAll")]
        public async Task<IActionResult> UpdateUser(Khachhang kh)
        {

            string query = @"UPDATE DBO.KHACHHANG SET TEN_KH = @TEN_KH , 
            CMND = @CMND, SDT= @SDT, EMAIL = @EMAIL, DIA_CHI = @DIA_CHI, 
            FAX = @FAX, SO_DEM_LUU_TRU = @SO_DEM_LUU_TRU, YEU_CAU_DB = @YCDB where MA_KH = @MA_KH";

            await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

            await sqlConnection.ExecuteAsync(query, new
            {

               
                MA_KH = kh.MaKh,
                TEN_KH= kh.TenKh,
                CMND = kh.Cmnd,
                SDT= kh.Sdt,
                EMAIL = kh.Email,
                DIA_CHI = kh.DiaChi,
                FAX= kh.Fax,
                SO_DEM_LUU_TRU = kh.SoDemLuuTru,
                YCDB = kh.YeuCauDb
            });

            return new JsonResult("UPDATED Succesfully");
        }
    }
}