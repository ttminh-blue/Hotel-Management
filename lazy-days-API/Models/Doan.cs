using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Doan
{
    public string MaDoan { get; set; } = null!;

    public string TenDoan { get; set; } = null!;

    public string? TenNguoiDk { get; set; }

    public DateTime? NgayDen { get; set; }

    public int? SoNguoi { get; set; }

    public int? SoDemLuuTru { get; set; }

    public virtual ICollection<Khachhang> MaKhs { get; } = new List<Khachhang>();
}
