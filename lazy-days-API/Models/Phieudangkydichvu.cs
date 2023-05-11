using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public class Phieudangkydichvu
{
    public string MaPhieudv { get; set; } = null!;

    public DateTime? NgayDangKy { get; set; }

    public double? TongTien { get; set; }

    public bool? GhiNhanSuDung { get; set; }

    public DateTime? NgaySuDung { get; set; }

    public string? MaPhieuDp { get; set; }

    public int? SL {get; set;}

    public string? LOAI { get; set; }

    public string? MaNv { get; set; }

    public string? MaDv { get; set; }

}

public class TTDKDV
{
    public string MA_DV { get; set; } = null!;
    public DateTime? NGAY_DANG_KY { get; set; }
    public double? TONG_TIEN { get; set; }

    public int? SOLUONG { get; set; }

    public string? TEN_KH { get; set; }
    public string? SDT {get; set; }

}
