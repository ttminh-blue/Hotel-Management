using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("PHIEUDANGKYDICHVU")]
public partial class Phieudangkydichvu
{
    [Key]
    [Column("MA_PHIEUDV")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaPhieudv { get; set; } = null!;

    [Column("NGAY_DANG_KY", TypeName = "datetime")]
    public DateTime? NgayDangKy { get; set; }

    [Column("TONG_TIEN")]
    public double? TongTien { get; set; }

    [Column("GHI_NHAN_SU_DUNG")]
    public bool? GhiNhanSuDung { get; set; }

    [Column("NGAY_SU_DUNG", TypeName = "datetime")]
    public DateTime? NgaySuDung { get; set; }

    [Column("MA_PHIEU_DP")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaPhieuDp { get; set; }

    [Column("MA_NV")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaNv { get; set; }

    [Column("MA_DV")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaDv { get; set; }

    [InverseProperty("MaPhieudvNavigation")]
    public virtual ICollection<Chitietthanhtoandv> Chitietthanhtoandvs { get; } = new List<Chitietthanhtoandv>();

    [ForeignKey("MaDv")]
    [InverseProperty("Phieudangkydichvus")]
    public virtual Dichvukhachsan? MaDvNavigation { get; set; }

    [ForeignKey("MaNv")]
    [InverseProperty("Phieudangkydichvus")]
    public virtual Nhanvien? MaNvNavigation { get; set; }

    [ForeignKey("MaPhieuDp")]
    [InverseProperty("Phieudangkydichvus")]
    public virtual Phieudatphong? MaPhieuDpNavigation { get; set; }
}
