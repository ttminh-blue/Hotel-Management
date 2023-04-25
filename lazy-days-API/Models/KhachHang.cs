using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

public  class Khachhang
{
   
    public string MaKh { get; set; } = null!;


    public string? TenKh { get; set; }

  
    public string? Cmnd { get; set; }


    public string? DiaChi { get; set; }


    public string? Sdt { get; set; }


    public string? Email { get; set; }


    public string? Fax { get; set; }

    public DateTime? NgayDen { get; set; }

    public int? SoDemLuuTru { get; set; }


    public string? LoaiPhong { get; set; }


    public string? YeuCauDb { get; set; }


    public string? LoaiKh { get; set; }


    public string? TrangThaiDatPhong { get; set; }

   // public Doan? doan { get; set; }

    //public Chitietdoan? ct_Doan { get; set; }

    //public Congtydulich? ctydulich { get; set; }

    //public Chitietdulich? ct_dulich { get; set; }

   // public Feedback? feedback { get; set; }

   // public Yeucaudacbiet? yeucaudacbiet { get; set; }


}
