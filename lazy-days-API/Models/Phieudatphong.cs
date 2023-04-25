using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("PHIEUDATPHONG")]
public partial class Phieudatphong
{
    public string MaPhieuDp { get; set; } = null!;
    public string MaKh { get; set; }
    public string MaNv { get; set; }
    public DateTime NgayDat { get; set; }
    public double TongTien { get; set; }
    public double TienCoc { get; set; }
    public string Loaiphong { get; set; }
    public DateTime NgayTraPhong { get; set; }
}
