using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Phieudatphong
{
    public string MaPhieuDp { get; set; } = null!;
<<<<<<< HEAD

    public string? MaKh { get; set; }

    public string? MaNv { get; set; }

    public DateTime? NgayDat { get; set; }

    public double? TongTien { get; set; }

    public double? TienCoc { get; set; }

    public string? Loaiphong { get; set; }

    public DateTime? NgayTraPhong { get; set; }

    public int? SoDemLuuTru { get; set; }

    public string? MaGoidv { get; set; }

    public virtual ICollection<Hoadon> Hoadons { get; } = new List<Hoadon>();

    public virtual Loaiphong? LoaiphongNavigation { get; set; }

    public virtual Goidichvu? MaGoidvNavigation { get; set; }

    public virtual Khachhang? MaKhNavigation { get; set; }

    public virtual Nhanvien? MaNvNavigation { get; set; }

    public virtual ICollection<Phanphong> Phanphongs { get; } = new List<Phanphong>();

    public virtual ICollection<Phieudangkydichvu> Phieudangkydichvus { get; } = new List<Phieudangkydichvu>();

    public virtual ICollection<Phieudangkyvanchuyen> Phieudangkyvanchuyens { get; } = new List<Phieudangkyvanchuyen>();
=======
    public string MaKh { get; set; }
    public string MaNv { get; set; }
    public DateTime NgayDat { get; set; }
    public double TongTien { get; set; }
    public double TienCoc { get; set; }
    public string Loaiphong { get; set; }
    public DateTime NgayTraPhong { get; set; }
>>>>>>> fd18acd6336ec5e7400f34caec9b76d4297e211f
}
