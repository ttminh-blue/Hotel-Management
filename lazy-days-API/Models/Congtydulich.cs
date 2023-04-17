using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("CONGTYDULICH")]
public partial class Congtydulich
{
    [Key]
    [Column("MA_CTY")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaCty { get; set; } = null!;

    [Column("TEN_CTY")]
    [StringLength(255)]
    public string TenCty { get; set; } = null!;

    [Column("TEN_NGUOI_DAI_DIEN")]
    [StringLength(255)]
    public string? TenNguoiDaiDien { get; set; }

    [Column("DIA_CHI")]
    [StringLength(255)]
    public string? DiaChi { get; set; }

    [InverseProperty("MaCtyNavigation")]
    public virtual ICollection<Chitietdulich> Chitietduliches { get; } = new List<Chitietdulich>();
}
