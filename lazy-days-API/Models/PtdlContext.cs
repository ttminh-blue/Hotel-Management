using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

public partial class PtdlContext : DbContext
{
    public PtdlContext()
    {
    }

    public PtdlContext(DbContextOptions<PtdlContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Chitietgdv> Chitietgdvs { get; set; }

    public virtual DbSet<Chitietphieukiemtraphong> Chitietphieukiemtraphongs { get; set; }

    public virtual DbSet<Chitietthanhtoandv> Chitietthanhtoandvs { get; set; }

    public virtual DbSet<Congtydulich> Congtyduliches { get; set; }

    public virtual DbSet<Dichvukhachsan> Dichvukhachsans { get; set; }

    public virtual DbSet<Doan> Doans { get; set; }

    public virtual DbSet<Dondatxe> Dondatxes { get; set; }

    public virtual DbSet<Donviluuhanh> Donviluuhanhs { get; set; }

    public virtual DbSet<Donvivanchuyen> Donvivanchuyens { get; set; }

    public virtual DbSet<Feedback> Feedbacks { get; set; }

    public virtual DbSet<Goidichvu> Goidichvus { get; set; }

    public virtual DbSet<Hoadon> Hoadons { get; set; }

    public virtual DbSet<Khachhang> Khachhangs { get; set; }

    public virtual DbSet<Loaiphong> Loaiphongs { get; set; }

    public virtual DbSet<Nhanvien> Nhanviens { get; set; }

    public virtual DbSet<Phancongdonvesinh> Phancongdonvesinhs { get; set; }

    public virtual DbSet<Phanphong> Phanphongs { get; set; }

    public virtual DbSet<Phieudangkydichvu> Phieudangkydichvus { get; set; }

    public virtual DbSet<Phieudangkyvanchuyen> Phieudangkyvanchuyens { get; set; }

    public virtual DbSet<Phieudatphong> Phieudatphongs { get; set; }

    public virtual DbSet<Phieudktour> Phieudktours { get; set; }

    public virtual DbSet<Phieukiemtraphong> Phieukiemtraphongs { get; set; }

    public virtual DbSet<Phong> Phongs { get; set; }

    public virtual DbSet<Taikhoan> Taikhoans { get; set; }

    public virtual DbSet<Tourdulich> Tourduliches { get; set; }

    public virtual DbSet<Yeucaudacbiet> Yeucaudacbiets { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-8NT70IU;Database=PTDL;Integrated Security=True;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Chitietgdv>(entity =>
        {
            entity.HasKey(e => new { e.MaGoidv, e.MaDv }).HasName("PK__CHITIETG__7D5A3B7BFC87BA18");

            entity.ToTable("CHITIETGDV");

            entity.Property(e => e.MaGoidv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_GOIDV");
            entity.Property(e => e.MaDv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_DV");
            entity.Property(e => e.Giamgia).HasColumnName("GIAMGIA");

            entity.HasOne(d => d.MaDvNavigation).WithMany(p => p.Chitietgdvs)
                .HasForeignKey(d => d.MaDv)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CHITIETGDV_DVKHACHSAN");

            entity.HasOne(d => d.MaGoidvNavigation).WithMany(p => p.Chitietgdvs)
                .HasForeignKey(d => d.MaGoidv)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CHITIETGDV_GOIDV");
        });

        modelBuilder.Entity<Chitietphieukiemtraphong>(entity =>
        {
            entity.HasKey(e => new { e.MaPhieukt, e.Stt }).HasName("PK__CHITIETP__8D0AF6C2F255DB55");

            entity.ToTable("CHITIETPHIEUKIEMTRAPHONG");

            entity.Property(e => e.MaPhieukt)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHIEUKT");
            entity.Property(e => e.Stt).HasColumnName("STT");
            entity.Property(e => e.ChiTietHuhai)
                .HasMaxLength(50)
                .HasColumnName("CHI_TIET_HUHAI");
            entity.Property(e => e.GiaBoiThuong).HasColumnName("GIA_BOI_THUONG");

            entity.HasOne(d => d.MaPhieuktNavigation).WithMany(p => p.Chitietphieukiemtraphongs)
                .HasForeignKey(d => d.MaPhieukt)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CHITIETPHIEUKIEMTRAPHONG_PHIEUKTPHONG");
        });

        modelBuilder.Entity<Chitietthanhtoandv>(entity =>
        {
            entity.HasKey(e => new { e.MaHd, e.MaPhieudv }).HasName("PK__CHITIETT__1AFB8945232DB878");

            entity.ToTable("CHITIETTHANHTOANDV");

            entity.Property(e => e.MaHd)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_HD");
            entity.Property(e => e.MaPhieudv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHIEUDV");
            entity.Property(e => e.DonGia).HasColumnName("DON_GIA");
            entity.Property(e => e.MaKetoan)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_KETOAN");

            entity.HasOne(d => d.MaHdNavigation).WithMany(p => p.Chitietthanhtoandvs)
                .HasForeignKey(d => d.MaHd)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CTTTDV_HOADON");

            entity.HasOne(d => d.MaKetoanNavigation).WithMany(p => p.Chitietthanhtoandvs)
                .HasForeignKey(d => d.MaKetoan)
                .HasConstraintName("FK_CTTTDV_NV");

            entity.HasOne(d => d.MaPhieudvNavigation).WithMany(p => p.Chitietthanhtoandvs)
                .HasForeignKey(d => d.MaPhieudv)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_CTTTDV_PDKDV");
        });

        modelBuilder.Entity<Congtydulich>(entity =>
        {
            entity.HasKey(e => e.MaCty).HasName("PK__CONGTYDU__901FE9FAF9279F45");

            entity.ToTable("CONGTYDULICH");

            entity.Property(e => e.MaCty)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_CTY");
            entity.Property(e => e.DiaChi)
                .HasMaxLength(255)
                .HasColumnName("DIA_CHI");
            entity.Property(e => e.TenCty)
                .HasMaxLength(255)
                .HasColumnName("TEN_CTY");
            entity.Property(e => e.TenNguoiDaiDien)
                .HasMaxLength(255)
                .HasColumnName("TEN_NGUOI_DAI_DIEN");
        });

        modelBuilder.Entity<Dichvukhachsan>(entity =>
        {
            entity.HasKey(e => e.MaDv).HasName("PK__DICHVUKH__53E15AF380B81922");

            entity.ToTable("DICHVUKHACHSAN");

            entity.Property(e => e.MaDv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_DV");
            entity.Property(e => e.Diadiem)
                .HasMaxLength(50)
                .HasColumnName("DIADIEM");
            entity.Property(e => e.Gia).HasColumnName("GIA");
            entity.Property(e => e.Tendichvu)
                .HasMaxLength(50)
                .HasColumnName("TENDICHVU");
        });

        modelBuilder.Entity<Doan>(entity =>
        {
            entity.HasKey(e => e.MaDoan).HasName("PK__DOAN__C81EAAC95F5DC1BF");

            entity.ToTable("DOAN");

            entity.Property(e => e.MaDoan)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_DOAN");
            entity.Property(e => e.NgayDen)
                .HasColumnType("date")
                .HasColumnName("NGAY_DEN");
            entity.Property(e => e.SoDemLuuTru).HasColumnName("SO_DEM_LUU_TRU");
            entity.Property(e => e.SoNguoi).HasColumnName("SO_NGUOI");
            entity.Property(e => e.TenDoan)
                .HasMaxLength(255)
                .HasColumnName("TEN_DOAN");
            entity.Property(e => e.TenNguoiDk)
                .HasMaxLength(255)
                .HasColumnName("TEN_NGUOI_DK");
        });

        modelBuilder.Entity<Dondatxe>(entity =>
        {
            entity.HasKey(e => e.MaDonDatXe).HasName("PK__DONDATXE__98B78DB9BA6DEE6E");

            entity.ToTable("DONDATXE");

            entity.Property(e => e.MaDonDatXe)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_DON_DAT_XE");
            entity.Property(e => e.BangSoXe)
                .HasMaxLength(10)
                .HasColumnName("BANG_SO_XE");
            entity.Property(e => e.MaDonvivanchuyen)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_DONVIVANCHUYEN");
            entity.Property(e => e.MaKh)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_KH");
            entity.Property(e => e.MaNv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_NV");
            entity.Property(e => e.NgayDat)
                .HasMaxLength(10)
                .HasColumnName("NGAY_DAT");

            entity.HasOne(d => d.MaDonvivanchuyenNavigation).WithMany(p => p.Dondatxes)
                .HasForeignKey(d => d.MaDonvivanchuyen)
                .HasConstraintName("FK_DONDATXE_DONVIVANCHUYEN");

            entity.HasOne(d => d.MaKhNavigation).WithMany(p => p.Dondatxes)
                .HasForeignKey(d => d.MaKh)
                .HasConstraintName("FK_DONDATXE_KHACHHANG");

            entity.HasOne(d => d.MaNvNavigation).WithMany(p => p.Dondatxes)
                .HasForeignKey(d => d.MaNv)
                .HasConstraintName("FK_DONDATXE_NHANVIEN");
        });

        modelBuilder.Entity<Donviluuhanh>(entity =>
        {
            entity.HasKey(e => e.MaDv).HasName("PK__DONVILUU__53E15AF3F46079A1");

            entity.ToTable("DONVILUUHANH");

            entity.Property(e => e.MaDv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_DV");
            entity.Property(e => e.PhiGt).HasColumnName("PHI_GT");
            entity.Property(e => e.TenDv)
                .HasMaxLength(50)
                .HasColumnName("TEN_DV");
        });

        modelBuilder.Entity<Donvivanchuyen>(entity =>
        {
            entity.HasKey(e => e.MaDonvivanchuyen).HasName("PK__DONVIVAN__443D02EB026F1081");

            entity.ToTable("DONVIVANCHUYEN");

            entity.Property(e => e.MaDonvivanchuyen)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_DONVIVANCHUYEN");
            entity.Property(e => e.NgayGioithieu)
                .HasColumnType("date")
                .HasColumnName("NGAY_GIOITHIEU");
            entity.Property(e => e.PhiGioithieu).HasColumnName("PHI_GIOITHIEU");
            entity.Property(e => e.TenDonvi)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("TEN_DONVI");
        });

        modelBuilder.Entity<Feedback>(entity =>
        {
            entity.HasKey(e => e.MaFb).HasName("PK__FEEDBACK__53E12ADD7735039F");

            entity.ToTable("FEEDBACK");

            entity.Property(e => e.MaFb)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_FB");
            entity.Property(e => e.DanhGia)
                .HasMaxLength(255)
                .HasColumnName("DANH_GIA");
            entity.Property(e => e.LoaiFb)
                .HasMaxLength(255)
                .HasColumnName("LOAI_FB");
            entity.Property(e => e.MaKh)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_KH");
            entity.Property(e => e.MieuTaFb)
                .HasMaxLength(255)
                .HasColumnName("MIEU_TA_FB");
            entity.Property(e => e.TenFb)
                .HasMaxLength(255)
                .HasColumnName("TEN_FB");

            entity.HasOne(d => d.MaKhNavigation).WithMany(p => p.Feedbacks)
                .HasForeignKey(d => d.MaKh)
                .HasConstraintName("FK_FEEDBACK_KHACHHANG");
        });

        modelBuilder.Entity<Goidichvu>(entity =>
        {
            entity.HasKey(e => e.MaGoidv).HasName("PK__GOIDICHV__58642ED469EAFE9A");

            entity.ToTable("GOIDICHVU");

            entity.Property(e => e.MaGoidv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_GOIDV");
            entity.Property(e => e.Gia).HasColumnName("GIA");
            entity.Property(e => e.TenGoidv)
                .HasMaxLength(50)
                .HasColumnName("TEN_GOIDV");
        });

        modelBuilder.Entity<Hoadon>(entity =>
        {
            entity.HasKey(e => e.MaHd).HasName("PK__HOADON__53E13A048AB4E49B");

            entity.ToTable("HOADON");

            entity.Property(e => e.MaHd)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_HD");
            entity.Property(e => e.MaPhieuDp)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHIEU_DP");
            entity.Property(e => e.NgayLap)
                .HasColumnType("datetime")
                .HasColumnName("NGAY_LAP");
            entity.Property(e => e.NhanVienLap)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("NHAN_VIEN_LAP");
            entity.Property(e => e.TienDv).HasColumnName("TIEN_DV");
            entity.Property(e => e.TienPhatsinh).HasColumnName("TIEN_PHATSINH");
            entity.Property(e => e.TongTien).HasColumnName("TONG_TIEN");

            entity.HasOne(d => d.MaPhieuDpNavigation).WithMany(p => p.Hoadons)
                .HasForeignKey(d => d.MaPhieuDp)
                .HasConstraintName("FK_HOADON_PHIEUDATPHONG");

            entity.HasOne(d => d.NhanVienLapNavigation).WithMany(p => p.Hoadons)
                .HasForeignKey(d => d.NhanVienLap)
                .HasConstraintName("FK_HOADON_NHANVIEN");
        });

        modelBuilder.Entity<Khachhang>(entity =>
        {
            entity.HasKey(e => e.MaKh).HasName("PK__KHACHHAN__53E101A333B07F92");

            entity.ToTable("KHACHHANG");

            entity.Property(e => e.MaKh)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_KH");
            entity.Property(e => e.Cmnd)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("CMND");
            entity.Property(e => e.DiaChi)
                .HasMaxLength(100)
                .HasColumnName("DIA_CHI");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Fax)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.Sdt)
                .HasMaxLength(10)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("SDT");
            entity.Property(e => e.SoDemLuuTru).HasColumnName("SO_DEM_LUU_TRU");
            entity.Property(e => e.TenKh)
                .HasMaxLength(100)
                .HasColumnName("TEN_KH");
            entity.Property(e => e.TrangThaiDatPhong)
                .HasMaxLength(50)
                .HasColumnName("TRANG_THAI_DAT_PHONG");
            entity.Property(e => e.YeuCauDb)
                .HasMaxLength(100)
                .HasColumnName("YEU_CAU_DB");

            entity.HasMany(d => d.MaCties).WithMany(p => p.MaKhs)
                .UsingEntity<Dictionary<string, object>>(
                    "Chitietdulich",
                    r => r.HasOne<Congtydulich>().WithMany()
                        .HasForeignKey("MaCty")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_CHITIETDULICH_CTYDULICH"),
                    l => l.HasOne<Khachhang>().WithMany()
                        .HasForeignKey("MaKh")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_CHITIETDULICH_KH"),
                    j =>
                    {
                        j.HasKey("MaKh", "MaCty").HasName("PK__CHITIETD__EAE0FF3C2DAF0D07");
                        j.ToTable("CHITIETDULICH");
                        j.IndexerProperty<string>("MaKh")
                            .HasMaxLength(5)
                            .IsUnicode(false)
                            .IsFixedLength()
                            .HasColumnName("MA_KH");
                        j.IndexerProperty<string>("MaCty")
                            .HasMaxLength(5)
                            .IsUnicode(false)
                            .IsFixedLength()
                            .HasColumnName("MA_CTY");
                    });

            entity.HasMany(d => d.MaDoans).WithMany(p => p.MaKhs)
                .UsingEntity<Dictionary<string, object>>(
                    "Chitietdoan",
                    r => r.HasOne<Doan>().WithMany()
                        .HasForeignKey("MaDoan")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_CHITIETDOAN_DOAN"),
                    l => l.HasOne<Khachhang>().WithMany()
                        .HasForeignKey("MaKh")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK_CHITIETDOAN_KH"),
                    j =>
                    {
                        j.HasKey("MaKh", "MaDoan").HasName("PK__CHITIETD__DF60EB0FC1A895E8");
                        j.ToTable("CHITIETDOAN");
                        j.IndexerProperty<string>("MaKh")
                            .HasMaxLength(5)
                            .IsUnicode(false)
                            .IsFixedLength()
                            .HasColumnName("MA_KH");
                        j.IndexerProperty<string>("MaDoan")
                            .HasMaxLength(5)
                            .IsUnicode(false)
                            .IsFixedLength()
                            .HasColumnName("MA_DOAN");
                    });
        });

        modelBuilder.Entity<Loaiphong>(entity =>
        {
            entity.HasKey(e => e.Loaiphong1).HasName("PK__LOAIPHON__9772B97164E0044D");

            entity.ToTable("LOAIPHONG");

            entity.Property(e => e.Loaiphong1)
                .HasMaxLength(30)
                .HasColumnName("LOAIPHONG");
            entity.Property(e => e.Giatien).HasColumnName("GIATIEN");
        });

        modelBuilder.Entity<Nhanvien>(entity =>
        {
            entity.HasKey(e => e.MaNv).HasName("PK__NHANVIEN__53E6E93FF28E179E");

            entity.ToTable("NHANVIEN");

            entity.Property(e => e.MaNv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_NV");
            entity.Property(e => e.ChucVu)
                .HasMaxLength(50)
                .HasColumnName("CHUC_VU");
            entity.Property(e => e.Cmnd)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("CMND");
            entity.Property(e => e.DiaChi)
                .HasColumnType("datetime")
                .HasColumnName("DIA_CHI");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EMAIL");
            entity.Property(e => e.GioiTinh)
                .HasMaxLength(3)
                .IsUnicode(false)
                .HasColumnName("GIOI_TINH");
            entity.Property(e => e.Luong).HasColumnName("LUONG");
            entity.Property(e => e.NgaySinh)
                .HasColumnType("datetime")
                .HasColumnName("NGAY_SINH");
            entity.Property(e => e.NgayThamGia)
                .HasColumnType("datetime")
                .HasColumnName("NGAY_THAM_GIA");
            entity.Property(e => e.Sdt)
                .HasMaxLength(10)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("SDT");
            entity.Property(e => e.TenNv)
                .HasMaxLength(100)
                .HasColumnName("TEN_NV");
        });

        modelBuilder.Entity<Phancongdonvesinh>(entity =>
        {
            entity.HasKey(e => e.MaPcdvs).HasName("PK__PHANCONG__AE8EE793C5F625AD");

            entity.ToTable("PHANCONGDONVESINH");

            entity.Property(e => e.MaPcdvs)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PCDVS");
            entity.Property(e => e.MaNvbellman)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_NVBELLMAN");
            entity.Property(e => e.MaNvvs)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_NVVS");
            entity.Property(e => e.MaPhong)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHONG");
            entity.Property(e => e.Thoigianbd)
                .HasColumnType("datetime")
                .HasColumnName("THOIGIANBD");
            entity.Property(e => e.Thoigiankt)
                .HasColumnType("datetime")
                .HasColumnName("THOIGIANKT");

            entity.HasOne(d => d.MaNvbellmanNavigation).WithMany(p => p.PhancongdonvesinhMaNvbellmanNavigations)
                .HasForeignKey(d => d.MaNvbellman)
                .HasConstraintName("FK_PHANCONGDONVESINH_NHANVIEN_BELLMAN");

            entity.HasOne(d => d.MaNvvsNavigation).WithMany(p => p.PhancongdonvesinhMaNvvsNavigations)
                .HasForeignKey(d => d.MaNvvs)
                .HasConstraintName("FK_PHANCONGDONVESINH_NHANVIEN_VS");

            entity.HasOne(d => d.MaPhongNavigation).WithMany(p => p.Phancongdonvesinhs)
                .HasForeignKey(d => d.MaPhong)
                .HasConstraintName("FK_PHANCONGDONVESINH_PHONG");
        });

        modelBuilder.Entity<Phanphong>(entity =>
        {
            entity.HasKey(e => new { e.MaPhong, e.MaPhieuDp }).HasName("PK__PHANPHON__5CDAAA9E0C38994E");

            entity.ToTable("PHANPHONG");

            entity.Property(e => e.MaPhong)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHONG");
            entity.Property(e => e.MaPhieuDp)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHIEU_DP");
            entity.Property(e => e.MaNvql)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_NVQL");
            entity.Property(e => e.NgayNhan)
                .HasColumnType("datetime")
                .HasColumnName("NGAY_NHAN");
            entity.Property(e => e.NgayPhanPhong)
                .HasColumnType("datetime")
                .HasColumnName("NGAY_PHAN_PHONG");

            entity.HasOne(d => d.MaNvqlNavigation).WithMany(p => p.Phanphongs)
                .HasForeignKey(d => d.MaNvql)
                .HasConstraintName("FK_PHANPHONG_NHANVIEN");

            entity.HasOne(d => d.MaPhieuDpNavigation).WithMany(p => p.Phanphongs)
                .HasForeignKey(d => d.MaPhieuDp)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_PHANPHONG_PHIEUDATPHONG");

            entity.HasOne(d => d.MaPhongNavigation).WithMany(p => p.Phanphongs)
                .HasForeignKey(d => d.MaPhong)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_PHANPHONG_PHONG");
        });

        modelBuilder.Entity<Phieudangkydichvu>(entity =>
        {
            entity.HasKey(e => e.MaPhieudv).HasName("PK__PHIEUDAN__91AB34154BB16013");

            entity.ToTable("PHIEUDANGKYDICHVU");

            entity.Property(e => e.MaPhieudv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHIEUDV");
            entity.Property(e => e.GhiNhanSuDung).HasColumnName("GHI_NHAN_SU_DUNG");
            entity.Property(e => e.MaDv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_DV");
            entity.Property(e => e.MaNv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_NV");
            entity.Property(e => e.MaPhieuDp)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHIEU_DP");
            entity.Property(e => e.NgayDangKy)
                .HasColumnType("datetime")
                .HasColumnName("NGAY_DANG_KY");
            entity.Property(e => e.NgaySuDung)
                .HasColumnType("datetime")
                .HasColumnName("NGAY_SU_DUNG");
            entity.Property(e => e.TongTien).HasColumnName("TONG_TIEN");

            entity.HasOne(d => d.MaDvNavigation).WithMany(p => p.Phieudangkydichvus)
                .HasForeignKey(d => d.MaDv)
                .HasConstraintName("FK_PHIEUDANGKYDICHVU_DICHVU");

            entity.HasOne(d => d.MaNvNavigation).WithMany(p => p.Phieudangkydichvus)
                .HasForeignKey(d => d.MaNv)
                .HasConstraintName("FK_PHIEUDANGKYDICHVU_NHANVIEN");

            entity.HasOne(d => d.MaPhieuDpNavigation).WithMany(p => p.Phieudangkydichvus)
                .HasForeignKey(d => d.MaPhieuDp)
                .HasConstraintName("FK_PHIEUDANGKYDICHVU_PHIEUDATPHONG");
        });

        modelBuilder.Entity<Phieudangkyvanchuyen>(entity =>
        {
            entity.HasKey(e => e.MaPhieudangkyvanchuyen).HasName("PK__PHIEUDAN__DDCD3E46CC7013FE");

            entity.ToTable("PHIEUDANGKYVANCHUYEN");

            entity.Property(e => e.MaPhieudangkyvanchuyen)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHIEUDANGKYVANCHUYEN");
            entity.Property(e => e.HanhLy).HasColumnName("HANH_LY");
            entity.Property(e => e.MaNv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_NV");
            entity.Property(e => e.MaPhieuDp)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHIEU_DP");
            entity.Property(e => e.MaPhong)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHONG");
            entity.Property(e => e.NgayTao)
                .HasColumnType("datetime")
                .HasColumnName("NGAY_TAO");
            entity.Property(e => e.SoLuong).HasColumnName("SO_LUONG");

            entity.HasOne(d => d.MaNvNavigation).WithMany(p => p.Phieudangkyvanchuyens)
                .HasForeignKey(d => d.MaNv)
                .HasConstraintName("FK_PHIEUDANGKYVANCHUYEN_NHANVIEN");

            entity.HasOne(d => d.MaPhieuDpNavigation).WithMany(p => p.Phieudangkyvanchuyens)
                .HasForeignKey(d => d.MaPhieuDp)
                .HasConstraintName("FK_PHIEUDANGKYVANCHUYEN_PHIEUDATPHONG_PHIEUDP");

            entity.HasOne(d => d.MaPhongNavigation).WithMany(p => p.Phieudangkyvanchuyens)
                .HasForeignKey(d => d.MaPhong)
                .HasConstraintName("FK_PHIEUDANGKYVANCHUYEN_PHONG_MAPHONG");
        });

        modelBuilder.Entity<Phieudatphong>(entity =>
        {
            entity.HasKey(e => e.MaPhieuDp).HasName("PK__PHIEUDAT__192455DC0E82E734");

            entity.ToTable("PHIEUDATPHONG");

            entity.Property(e => e.MaPhieuDp)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHIEU_DP");
            entity.Property(e => e.Loaiphong)
                .HasMaxLength(30)
                .HasColumnName("LOAIPHONG");
            entity.Property(e => e.MaGoidv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_GOIDV");
            entity.Property(e => e.MaKh)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_KH");
            entity.Property(e => e.MaNv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_NV");
            entity.Property(e => e.NgayDat)
                .HasColumnType("datetime")
                .HasColumnName("NGAY_DAT");
            entity.Property(e => e.NgayTraPhong)
                .HasColumnType("datetime")
                .HasColumnName("NGAY_TRA_PHONG");
            entity.Property(e => e.SoDemLuuTru).HasColumnName("SO_DEM_LUU_TRU");
            entity.Property(e => e.TienCoc).HasColumnName("TIEN_COC");
            entity.Property(e => e.TongTien).HasColumnName("TONG_TIEN");

            entity.HasOne(d => d.LoaiphongNavigation).WithMany(p => p.Phieudatphongs)
                .HasForeignKey(d => d.Loaiphong)
                .HasConstraintName("FK_PHIEUDATPHONG_LOAIPHONG");

            entity.HasOne(d => d.MaGoidvNavigation).WithMany(p => p.Phieudatphongs)
                .HasForeignKey(d => d.MaGoidv)
                .HasConstraintName("FK_PHIEUDATPHONG_GOIDICHVU");

            entity.HasOne(d => d.MaKhNavigation).WithMany(p => p.Phieudatphongs)
                .HasForeignKey(d => d.MaKh)
                .HasConstraintName("FK_PHIEUDATPHONG_KHACHHANG");

            entity.HasOne(d => d.MaNvNavigation).WithMany(p => p.Phieudatphongs)
                .HasForeignKey(d => d.MaNv)
                .HasConstraintName("FK_PHIEUDATPHONG_NHANVIEN");
        });

        modelBuilder.Entity<Phieudktour>(entity =>
        {
            entity.HasKey(e => e.MaP).HasName("PK__PHIEUDKT__6022EBBD98E3D41B");

            entity.ToTable("PHIEUDKTOUR");

            entity.Property(e => e.MaP)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_P");
            entity.Property(e => e.Dichvuduadon)
                .HasMaxLength(50)
                .HasColumnName("DICHVUDUADON");
            entity.Property(e => e.MaKh)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_KH");
            entity.Property(e => e.MaNv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_NV");
            entity.Property(e => e.MaTour)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_TOUR");
            entity.Property(e => e.Ngaydangky)
                .HasColumnType("date")
                .HasColumnName("NGAYDANGKY");
            entity.Property(e => e.Songuoithamgia).HasColumnName("SONGUOITHAMGIA");
            entity.Property(e => e.Tennguoidk)
                .HasMaxLength(50)
                .HasColumnName("TENNGUOIDK");
            entity.Property(e => e.Thoigiankhoihang)
                .HasColumnType("datetime")
                .HasColumnName("THOIGIANKHOIHANG");
            entity.Property(e => e.Trangthai)
                .HasMaxLength(20)
                .HasColumnName("TRANGTHAI");

            entity.HasOne(d => d.MaKhNavigation).WithMany(p => p.Phieudktours)
                .HasForeignKey(d => d.MaKh)
                .HasConstraintName("FK_PHIEUDKTOUR_KHACHHANG");

            entity.HasOne(d => d.MaNvNavigation).WithMany(p => p.Phieudktours)
                .HasForeignKey(d => d.MaNv)
                .HasConstraintName("FK_PHIEUDKTOUR_NHANVIEN");

            entity.HasOne(d => d.MaTourNavigation).WithMany(p => p.Phieudktours)
                .HasForeignKey(d => d.MaTour)
                .HasConstraintName("FK_PHIEUDKTOUR_TOURDULICH");
        });

        modelBuilder.Entity<Phieukiemtraphong>(entity =>
        {
            entity.HasKey(e => e.MaPhieukt).HasName("PK__PHIEUKIE__91AB1DAB811EA37F");

            entity.ToTable("PHIEUKIEMTRAPHONG");

            entity.Property(e => e.MaPhieukt)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHIEUKT");
            entity.Property(e => e.MaHd)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_HD");
            entity.Property(e => e.MaNv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_NV");
            entity.Property(e => e.ThoiGianLap)
                .HasColumnType("datetime")
                .HasColumnName("THOI_GIAN_LAP");
            entity.Property(e => e.TongTienBoiThuong).HasColumnName("TONG_TIEN_BOI_THUONG");
            entity.Property(e => e.TrangThai)
                .HasMaxLength(20)
                .HasColumnName("TRANG_THAI");

            entity.HasOne(d => d.MaHdNavigation).WithMany(p => p.Phieukiemtraphongs)
                .HasForeignKey(d => d.MaHd)
                .HasConstraintName("FK_PHIEUKTP_HOADON");

            entity.HasOne(d => d.MaNvNavigation).WithMany(p => p.Phieukiemtraphongs)
                .HasForeignKey(d => d.MaNv)
                .HasConstraintName("FK_PHIEUKIEMTRAPHONG_BUONGPHONG");
        });

        modelBuilder.Entity<Phong>(entity =>
        {
            entity.HasKey(e => e.MaPhong).HasName("PK__PHONG__8D48EFC3DD6F8975");

            entity.ToTable("PHONG");

            entity.Property(e => e.MaPhong)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_PHONG");
            entity.Property(e => e.Gia).HasColumnName("GIA");
            entity.Property(e => e.Loai)
                .HasMaxLength(30)
                .HasColumnName("LOAI");
            entity.Property(e => e.SoLuongDapUng).HasColumnName("SO_LUONG_DAP_UNG");
            entity.Property(e => e.TenPhong)
                .HasMaxLength(100)
                .HasColumnName("TEN_PHONG");
            entity.Property(e => e.TrangThai).HasColumnName("TRANG_THAI");

            entity.HasOne(d => d.LoaiNavigation).WithMany(p => p.Phongs)
                .HasForeignKey(d => d.Loai)
                .HasConstraintName("FK_PHONG_LOAIPHONG");
        });

        modelBuilder.Entity<Taikhoan>(entity =>
        {
            entity.HasKey(e => e.MaTaikhoan).HasName("PK__TAIKHOAN__D0DA98BC158E7E0D");

            entity.ToTable("TAIKHOAN");

            entity.Property(e => e.MaTaikhoan)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_TAIKHOAN");
            entity.Property(e => e.MaNv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_NV");
            entity.Property(e => e.Matkhau)
                .HasMaxLength(50)
                .HasColumnName("MATKHAU");
            entity.Property(e => e.TenTaikhoan)
                .HasMaxLength(50)
                .HasColumnName("TEN_TAIKHOAN");

            entity.HasOne(d => d.MaNvNavigation).WithMany(p => p.Taikhoans)
                .HasForeignKey(d => d.MaNv)
                .HasConstraintName("FK_TAIKHOAN_NHANVIEN");
        });

        modelBuilder.Entity<Tourdulich>(entity =>
        {
            entity.HasKey(e => e.MaTour).HasName("PK__TOURDULI__A136D8E91ACD60C6");

            entity.ToTable("TOURDULICH");

            entity.Property(e => e.MaTour)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_TOUR");
            entity.Property(e => e.Gia).HasColumnName("GIA");
            entity.Property(e => e.MaDv)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_DV");
            entity.Property(e => e.Mota)
                .HasMaxLength(50)
                .HasColumnName("MOTA");
            entity.Property(e => e.TenTour)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("TEN_TOUR");

            entity.HasOne(d => d.MaDvNavigation).WithMany(p => p.Tourduliches)
                .HasForeignKey(d => d.MaDv)
                .HasConstraintName("FK_TOURDULICH_LUHANH");
        });

        modelBuilder.Entity<Yeucaudacbiet>(entity =>
        {
            entity.HasKey(e => e.MaYcdc).HasName("PK__YEUCAUDA__A5AE813E67AF0C9A");

            entity.ToTable("YEUCAUDACBIET");

            entity.Property(e => e.MaYcdc)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_YCDC");
            entity.Property(e => e.MaKh)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("MA_KH");
            entity.Property(e => e.TenYcdc)
                .HasMaxLength(255)
                .HasColumnName("TEN_YCDC");

            entity.HasOne(d => d.MaKhNavigation).WithMany(p => p.Yeucaudacbiets)
                .HasForeignKey(d => d.MaKh)
                .HasConstraintName("FK_YEUCAUDACBIET_kh");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
