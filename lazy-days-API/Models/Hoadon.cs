﻿using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Hoadon
{
    public string MaHd { get; set; } = null!;

    public DateTime? NgayLap { get; set; }

    public double? TienDv { get; set; }

    public double? TienPhatsinh { get; set; }

    public double? TongTien { get; set; }

    public string? NhanVienLap { get; set; }

    public string? MaPhieuDp { get; set; }

   
}
