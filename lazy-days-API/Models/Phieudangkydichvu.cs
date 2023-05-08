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

    public string? MaNv { get; set; }

    public string? MaDv { get; set; }

}
