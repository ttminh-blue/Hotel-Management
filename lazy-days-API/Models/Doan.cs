using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("DOAN")]
public partial class Doan
{
    [Key]
    [Column("MA_DOAN")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaDoan { get; set; } = null!;

    [Column("TEN_DOAN")]
    [StringLength(255)]
    public string TenDoan { get; set; } = null!;

    [Column("TEN_NGUOI_DK")]
    [StringLength(255)]
    public string? TenNguoiDk { get; set; }

    [Column("NGAY_DEN", TypeName = "date")]
    public DateTime? NgayDen { get; set; }

    [Column("SO_NGUOI")]
    public int? SoNguoi { get; set; }

    [Column("SO_DEM_LUU_TRU")]
    public int? SoDemLuuTru { get; set; }

}
