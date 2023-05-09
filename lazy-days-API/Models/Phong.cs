using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Phong
{
    public string MaPhong { get; set; } = null!;

    public string? TenPhong { get; set; }

    public int? SoLuongDapUng { get; set; }

    public string? Loai { get; set; }

    public bool? TrangThai { get; set; }

    public int? Gia { get; set; }

}
