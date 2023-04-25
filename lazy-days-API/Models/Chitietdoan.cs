using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[PrimaryKey("MaKh", "MaDoan")]
[Table("CHITIETDOAN")]
public partial class Chitietdoan
{
    [Key]
    [Column("MA_KH")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaKh { get; set; } = null!;

    [Key]
    [Column("MA_DOAN")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaDoan { get; set; } = null!;

    [Column("SO_NGUOI")]
    public int? SoNguoi { get; set; }

   
}
