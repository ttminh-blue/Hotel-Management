using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[PrimaryKey("MaPhieukt", "Stt")]
[Table("CHITIETPHIEUKIEMTRAPHONG")]
public partial class Chitietphieukiemtraphong
{
    [Key]
    [Column("MA_PHIEUKT")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaPhieukt { get; set; } = null!;

    [Key]
    [Column("STT")]
    public int Stt { get; set; }

    [Column("CHI_TIET_HUHAI")]
    [StringLength(50)]
    public string? ChiTietHuhai { get; set; }

    [Column("GIA_BOI_THUONG")]
    public int? GiaBoiThuong { get; set; }

    [ForeignKey("MaPhieukt")]
    [InverseProperty("Chitietphieukiemtraphongs")]
    public virtual Phieukiemtraphong MaPhieuktNavigation { get; set; } = null!;
}
