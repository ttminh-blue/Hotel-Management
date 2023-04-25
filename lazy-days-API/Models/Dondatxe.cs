using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Dondatxe
{
    public string MaDonDatXe { get; set; } = null!;

    public string? MaKh { get; set; }

    public string? MaDonvivanchuyen { get; set; }

    public string? MaNv { get; set; }

    public string? BangSoXe { get; set; }

    public string? NgayDat { get; set; }

    public virtual Donvivanchuyen? MaDonvivanchuyenNavigation { get; set; }

    public virtual Khachhang? MaKhNavigation { get; set; }

    public virtual Nhanvien? MaNvNavigation { get; set; }
}
