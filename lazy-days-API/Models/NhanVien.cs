using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("NHANVIEN")]
public partial class Nhanvien
{
    [Key]
    [Column("MA_NV")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaNv { get; set; } = null!;

    [Column("TEN_NV")]
    [StringLength(100)]
    public string? TenNv { get; set; }

    [Column("CHUC_VU")]
    [StringLength(50)]
    public string? ChucVu { get; set; }

    [Column("EMAIL")]
    [StringLength(50)]
    [Unicode(false)]
    public string? Email { get; set; }

    [Column("GIOI_TINH")]
    [StringLength(3)]
    [Unicode(false)]
    public string? GioiTinh { get; set; }

    [Column("SDT")]
    [StringLength(10)]
    [Unicode(false)]
    public string? Sdt { get; set; }

    [Column("CMND")]
    [StringLength(50)]
    [Unicode(false)]
    public string? Cmnd { get; set; }

    [Column("NGAY_SINH", TypeName = "datetime")]
    public DateTime? NgaySinh { get; set; }

    [Column("NGAY_THAM_GIA", TypeName = "datetime")]
    public DateTime? NgayThamGia { get; set; }

    [Column("DIA_CHI", TypeName = "datetime")]
    public DateTime? DiaChi { get; set; }

    [Column("LUONG")]
    public double? Luong { get; set; }

    [InverseProperty("MaKetoanNavigation")]
    public virtual ICollection<Chitietthanhtoandv> Chitietthanhtoandvs { get; } = new List<Chitietthanhtoandv>();

    [InverseProperty("MaNvNavigation")]
    public virtual ICollection<Dondatxe> Dondatxes { get; } = new List<Dondatxe>();

    [InverseProperty("NhanVienLapNavigation")]
    public virtual ICollection<Hoadon> Hoadons { get; } = new List<Hoadon>();

    [InverseProperty("MaNvNavigation")]
    public virtual ICollection<Phancongdonvesinh> Phancongdonvesinhs { get; } = new List<Phancongdonvesinh>();

    [InverseProperty("MaNvqlNavigation")]
    public virtual ICollection<Phanphong> Phanphongs { get; } = new List<Phanphong>();

    [InverseProperty("MaNvNavigation")]
    public virtual ICollection<Phieudangkydichvu> Phieudangkydichvus { get; } = new List<Phieudangkydichvu>();

    [InverseProperty("MaNvNavigation")]
    public virtual ICollection<Phieudangkyvanchuyen> Phieudangkyvanchuyens { get; } = new List<Phieudangkyvanchuyen>();

    [InverseProperty("MaNvNavigation")]
    public virtual ICollection<Phieudatphong> Phieudatphongs { get; } = new List<Phieudatphong>();

    [InverseProperty("MaNvNavigation")]
    public virtual ICollection<Phieudktour> Phieudktours { get; } = new List<Phieudktour>();

    [InverseProperty("MaNvNavigation")]
    public virtual ICollection<Phieukiemtraphong> Phieukiemtraphongs { get; } = new List<Phieukiemtraphong>();

    [InverseProperty("MaNvNavigation")]
    public virtual ICollection<Taikhoan> Taikhoans { get; } = new List<Taikhoan>();
}
