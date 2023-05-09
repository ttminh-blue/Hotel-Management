using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Nhanvien
{
    public string MaNv { get; set; } = null!;

    public string? TenNv { get; set; }

    public string? ChucVu { get; set; }

    public string? Email { get; set; }

    public string? GioiTinh { get; set; }

    public string? Sdt { get; set; }

    public string? Cmnd { get; set; }

    public DateTime? NgaySinh { get; set; }

    public DateTime? NgayThamGia { get; set; }

    public string? DiaChi { get; set; }

    public double? Luong { get; set; }
   
}
