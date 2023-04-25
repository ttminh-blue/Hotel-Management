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

    public DateTime? DiaChi { get; set; }

    public double? Luong { get; set; }

    public virtual ICollection<Chitietthanhtoandv> Chitietthanhtoandvs { get; } = new List<Chitietthanhtoandv>();

    public virtual ICollection<Dondatxe> Dondatxes { get; } = new List<Dondatxe>();

    public virtual ICollection<Hoadon> Hoadons { get; } = new List<Hoadon>();

    public virtual ICollection<Phancongdonvesinh> PhancongdonvesinhMaNvbellmanNavigations { get; } = new List<Phancongdonvesinh>();

    public virtual ICollection<Phancongdonvesinh> PhancongdonvesinhMaNvvsNavigations { get; } = new List<Phancongdonvesinh>();

    public virtual ICollection<Phanphong> Phanphongs { get; } = new List<Phanphong>();

    public virtual ICollection<Phieudangkydichvu> Phieudangkydichvus { get; } = new List<Phieudangkydichvu>();

    public virtual ICollection<Phieudangkyvanchuyen> Phieudangkyvanchuyens { get; } = new List<Phieudangkyvanchuyen>();

    public virtual ICollection<Phieudatphong> Phieudatphongs { get; } = new List<Phieudatphong>();

    public virtual ICollection<Phieudktour> Phieudktours { get; } = new List<Phieudktour>();

    public virtual ICollection<Phieukiemtraphong> Phieukiemtraphongs { get; } = new List<Phieukiemtraphong>();

    public virtual ICollection<Taikhoan> Taikhoans { get; } = new List<Taikhoan>();
}
