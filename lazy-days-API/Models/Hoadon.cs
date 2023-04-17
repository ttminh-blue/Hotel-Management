using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("HOADON")]
public partial class Hoadon
{
    [Key]
    [Column("MA_HD")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaHd { get; set; } = null!;

    [Column("NGAY_LAP", TypeName = "datetime")]
    public DateTime? NgayLap { get; set; }

    [Column("TIEN_DV")]
    public double? TienDv { get; set; }

    [Column("TIEN_PHATSINH")]
    public double? TienPhatsinh { get; set; }

    [Column("TONG_TIEN")]
    public double? TongTien { get; set; }

    [Column("NHAN_VIEN_LAP")]
    [StringLength(5)]
    [Unicode(false)]
    public string? NhanVienLap { get; set; }

    [Column("MA_PHIEU_DP")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaPhieuDp { get; set; }

    [InverseProperty("MaHdNavigation")]
    public virtual ICollection<Chitietthanhtoandv> Chitietthanhtoandvs { get; } = new List<Chitietthanhtoandv>();

    [ForeignKey("MaPhieuDp")]
    [InverseProperty("Hoadons")]
    public virtual Phieudatphong? MaPhieuDpNavigation { get; set; }

    [ForeignKey("NhanVienLap")]
    [InverseProperty("Hoadons")]
    public virtual Nhanvien? NhanVienLapNavigation { get; set; }

    [InverseProperty("MaHdNavigation")]
    public virtual ICollection<Phieukiemtraphong> Phieukiemtraphongs { get; } = new List<Phieukiemtraphong>();
}
