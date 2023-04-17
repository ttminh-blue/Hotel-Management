using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("FEEDBACK")]
public partial class Feedback
{
    [Key]
    [Column("MA_FB")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaFb { get; set; } = null!;

    [Column("TEN_FB")]
    [StringLength(255)]
    public string TenFb { get; set; } = null!;

    [Column("MIEU_TA_FB")]
    [StringLength(255)]
    public string? MieuTaFb { get; set; }

    [Column("LOAI_FB")]
    [StringLength(255)]
    public string? LoaiFb { get; set; }

    [Column("DANH_GIA")]
    [StringLength(255)]
    public string? DanhGia { get; set; }

    [Column("MA_KH")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaKh { get; set; }

    [ForeignKey("MaKh")]
    [InverseProperty("Feedbacks")]
    public virtual Khachhang? MaKhNavigation { get; set; }
}
