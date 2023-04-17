using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("DONVIVANCHUYEN")]
public partial class Donvivanchuyen
{
    [Key]
    [Column("MA_DONVIVANCHUYEN")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaDonvivanchuyen { get; set; } = null!;

    [Column("TEN_DONVI")]
    [StringLength(5)]
    [Unicode(false)]
    public string? TenDonvi { get; set; }

    [Column("NGAY_GIOITHIEU", TypeName = "date")]
    public DateTime? NgayGioithieu { get; set; }

    [Column("PHI_GIOITHIEU")]
    public double? PhiGioithieu { get; set; }

    [InverseProperty("MaDonvivanchuyenNavigation")]
    public virtual ICollection<Dondatxe> Dondatxes { get; } = new List<Dondatxe>();
}
