using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("YEUCAUDACBIET")]
public partial class Yeucaudacbiet
{
    [Key]
    [Column("MA_YCDC")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaYcdc { get; set; } = null!;

    [Column("MA_KH")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaKh { get; set; }

    [Column("TEN_YCDC")]
    [StringLength(255)]
    public string TenYcdc { get; set; } = null!;

    [ForeignKey("MaKh")]
    [InverseProperty("Yeucaudacbiets")]
    public virtual Khachhang? MaKhNavigation { get; set; }
}
