using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[PrimaryKey("MaPhong", "MaPhieuDp")]
[Table("PHANPHONG")]
public partial class Phanphong
{
    [Column("MA_NVQL")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaNvql { get; set; }

    [Key]
    [Column("MA_PHIEU_DP")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaPhieuDp { get; set; } = null!;

    [Key]
    [Column("MA_PHONG")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaPhong { get; set; } = null!;

    [Column("NGAY_PHAN_PHONG", TypeName = "datetime")]
    public DateTime? NgayPhanPhong { get; set; }

    [Column("NGAY_NHAN", TypeName = "datetime")]
    public DateTime? NgayNhan { get; set; }

    [ForeignKey("MaNvql")]
    [InverseProperty("Phanphongs")]
    public virtual Nhanvien? MaNvqlNavigation { get; set; }

    [ForeignKey("MaPhieuDp")]
    [InverseProperty("Phanphongs")]
    public virtual Phieudatphong MaPhieuDpNavigation { get; set; } = null!;

    [ForeignKey("MaPhong")]
    [InverseProperty("Phanphongs")]
    public virtual Phong MaPhongNavigation { get; set; } = null!;
}
