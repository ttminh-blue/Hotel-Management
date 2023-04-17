using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[PrimaryKey("MaKh", "MaCty")]
[Table("CHITIETDULICH")]
public partial class Chitietdulich
{
    [Key]
    [Column("MA_KH")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaKh { get; set; } = null!;

    [Key]
    [Column("MA_CTY")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaCty { get; set; } = null!;

    [Column("DIADIEM")]
    [StringLength(50)]
    public string? Diadiem { get; set; }

    [Column("NGAY_DEN_KHACH_SAN", TypeName = "date")]
    public DateTime? NgayDenKhachSan { get; set; }

    [ForeignKey("MaCty")]
    [InverseProperty("Chitietduliches")]
    public virtual Congtydulich MaCtyNavigation { get; set; } = null!;

    [ForeignKey("MaKh")]
    [InverseProperty("Chitietduliches")]
    public virtual Khachhang MaKhNavigation { get; set; } = null!;
}
