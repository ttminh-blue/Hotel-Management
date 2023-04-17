using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("PHIEUDANGKYVANCHUYEN")]
public partial class Phieudangkyvanchuyen
{
    [Key]
    [Column("MA_PHIEUDANGKYVANCHUYEN")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaPhieudangkyvanchuyen { get; set; } = null!;

    [Column("MA_PHONG")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaPhong { get; set; }

    [Column("MA_KH")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaKh { get; set; }

    [Column("MA_NV")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaNv { get; set; }

    [Column("NGAY_TAO", TypeName = "datetime")]
    public DateTime? NgayTao { get; set; }

    [Column("SO_LUONG")]
    public int? SoLuong { get; set; }

    [ForeignKey("MaKh")]
    [InverseProperty("Phieudangkyvanchuyens")]
    public virtual Khachhang? MaKhNavigation { get; set; }

    [ForeignKey("MaNv")]
    [InverseProperty("Phieudangkyvanchuyens")]
    public virtual Nhanvien? MaNvNavigation { get; set; }

    [ForeignKey("MaPhong")]
    [InverseProperty("Phieudangkyvanchuyens")]
    public virtual Phong? MaPhongNavigation { get; set; }
}
