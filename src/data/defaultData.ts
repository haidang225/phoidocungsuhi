/**
 * Authoritative default dataset bundled into the client build.
 * Ensures that even on a fresh machine (empty localStorage / IndexedDB),
 * all 4 core outfits (Song Ngư Triều Ngọc, Hạc Nguyệt, Sen Ngọc, Vân Hải Giao Lĩnh)
 * are immediately available without any data loss.
 */

import { CustomOutfit, CostumeItem, LookbookItem } from '../types/vietphuc';

export const DEFAULT_OUTFITS: CustomOutfit[] = [
  {
    "id": "outfit_1791650131392_0mcml",
    "name": "Song Ngư Triều Ngọc",
    "creatorName": "Queenie",
    "gender": "Nam",
    "createdAt": 1791650131392,
    "imageUrl": "/uploads/outfit_d2ad820f80ac.webp",
    "imageUrls": [
      "/uploads/outfit_d2ad820f80ac.webp",
      "/uploads/outfit_f4e5e8eace09.webp",
      "/uploads/outfit_3ba408de680d.webp",
      "/uploads/outfit_d57a77727cf7.webp",
      "/uploads/outfit_8ca66efe827f.webp",
      "/uploads/outfit_a1f7d1c8e03a.webp",
      "/uploads/outfit_8e0d14ce825b.webp"
    ],
    "heroColor": "#D4AF37",
    "colorLabel": "Vàng hoàng yến / Kim",
    "introduction": "Song Ngư Triều Ngọc ra đời như một chiếc cầu nối tinh tế giữa di sản ngàn năm và nhịp sống đô thị hiện đại. Dưới góc nhìn tối giản, nam tính và đầy chiều sâu nghệ thuật thiết kế đã biến di sản không chỉ là hoài niệm và được thấy ở mỗi dịp lễ hay trong bảo tàng mà trở thành trang phục ứng dụng mang đầy bản sắc dân tộc.\nThiết kế tái hiện lại vẻ đẹp tao nhã với thân áo kế thừa vạt chéo nẹp thẳng mực thước từ áo Giao Lĩnh truyền thống. Tay áo mượn cảm hứng từ dáng tay buông rủ kiêu sa của áo Nhật Bình nhưng đã được cách tân thành phom suông bồng nhẹ, mang lại sự linh hoạt, cá tính cho người mặc. Đặc biệt, chính là họa tiết song ngư dựa trên điển tích \"Song Ngư Vọng Nguyệt\" hình tượng đôi cá chép mềm mại bơi ngược dòng và giao nhau tượng trưng cho sự âm dương hòa hợp. Hình ảnh \" Ngự Long\" lấy cảm hứng từ thời nhà Nguyễn, nhà Lê với mong muốn gửi gắm sự phồn vinh, thịnh vượng và sức mạnh của dân tộc.",
    "components": [
      {
        "id": "item_1791650029042_918t2",
        "name": "Song Ngư Triều Ngọc",
        "category": "bo_trang_phuc",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nam",
        "heroColor": "#D4AF37",
        "colorLabel": "Vàng hoàng yến / Kim",
        "availableColors": [
          "#D4AF37"
        ],
        "material": "Canvas, Da, Kim Loại",
        "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Bộ Trang Phục, mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
        "culturalMeaning": "Trọn bộ trang phục cổ truyền hoàn chỉnh tôn vinh vẻ đẹp di sản dân tộc.",
        "remixTips": "Phối hợp hài hòa cùng các lớp trang phục trong phòng trưng bày.",
        "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
        "imageUrl": "/uploads/comp_d2ad820f80ac.webp",
        "imageUrls": [
          "/uploads/comp_d2ad820f80ac.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791650045746_g3mna",
        "name": "Song Ngư Triều Ngọc",
        "category": "ao_ngoai",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nam",
        "heroColor": "#D4AF37",
        "colorLabel": "Vàng hoàng yến / Kim",
        "availableColors": [
          "#D4AF37"
        ],
        "material": "Canvas",
        "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Áo Chính (Mặt Trước), mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
        "culturalMeaning": "Thể hiện vẻ đẹp trang nhã, đoan chính và niềm tự hào di sản truyền thống Việt Nam.",
        "remixTips": "Phối cùng quần lãnh Mỹ A hoặc chân váy, kết hợp phụ kiện đương đại.",
        "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
        "imageUrl": "/uploads/comp_f4e5e8eace09.webp",
        "imageUrls": [
          "/uploads/comp_f4e5e8eace09.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791650057440_zpx9n",
        "name": "Song Ngư Triều Ngọc",
        "category": "ao_ngoai_sau",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nam",
        "heroColor": "#D4AF37",
        "colorLabel": "Vàng hoàng yến / Kim",
        "availableColors": [
          "#D4AF37"
        ],
        "material": "Canvas",
        "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Áo Chính (Mặt Sau), mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
        "culturalMeaning": "Mặt sau áo ngoài thể hiện sống áo ngay thẳng, nếp vải buông suông trang nghiêm và thanh thoát.",
        "remixTips": "Đồng điệu màu sắc và chất liệu cùng mặt trước của áo ngoài.",
        "culturalAdvisory": "Giữ phom lưng áo phẳng phiu, sống áo thẳng thớm.",
        "imageUrl": "/uploads/comp_3ba408de680d.webp",
        "imageUrls": [
          "/uploads/comp_3ba408de680d.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791650076315_bcafi",
        "name": "Song Ngư Triều Ngọc",
        "category": "quan_vay",
        "era": "Triều Nguyễn",
        "region": "Nam Bộ / Bắc Bộ",
        "gender": "Nam",
        "heroColor": "#1A1A1A",
        "colorLabel": "Đen",
        "availableColors": [
          "#1A1A1A"
        ],
        "material": "Da",
        "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Thân Dưới, mang sắc Đen, sáng tạo bởi Queenie.",
        "culturalMeaning": "Thân dưới suông rộng thoải mái, tượng trưng cho sự mềm mại, nền nã.",
        "remixTips": "Ống suông phóng khoáng dễ dàng phối với giày sneaker trắng hoặc guốc mộc.",
        "culturalAdvisory": "Độ dài chạm mắt cá chân, ống quần thẳng tắp trang nhã.",
        "imageUrl": "/uploads/comp_d57a77727cf7.webp",
        "imageUrls": [
          "/uploads/comp_d57a77727cf7.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791650089257_94l2n",
        "name": "Song Ngư Triều Ngọc",
        "category": "giay_dep",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nam",
        "heroColor": "#1A1A1A",
        "colorLabel": "Đen",
        "availableColors": [
          "#1A1A1A"
        ],
        "material": "Da",
        "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Giày Dép, mang sắc Đen, sáng tạo bởi Queenie.",
        "culturalMeaning": "Bước đi khoan thai, vững vàng và thanh nhã của người xưa.",
        "remixTips": "Có thể linh hoạt dùng hài thêu cổ truyền hoặc giày modern minimalist.",
        "culturalAdvisory": "Chọn phom dáng êm ái, màu sắc ăn nhập với tổng thể trang phục.",
        "imageUrl": "/uploads/comp_8ca66efe827f.webp",
        "imageUrls": [
          "/uploads/comp_8ca66efe827f.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791650128562_fdlzm",
        "name": "Song Ngư Triều Ngọc",
        "category": "phu_kien",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nam",
        "heroColor": "#D4AF37",
        "colorLabel": "Bạc",
        "availableColors": [
          "#D4AF37"
        ],
        "material": "Bạc",
        "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Phụ Kiện, mang sắc Bạc, sáng tạo bởi Queenie.",
        "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
        "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
        "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
        "imageUrl": "/uploads/comp_a1f7d1c8e03a.webp",
        "imageUrls": [
          "/uploads/comp_a1f7d1c8e03a.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791650111371_e6cgz",
        "name": "Song Ngư Triều Ngọc",
        "category": "phu_kien",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nam",
        "heroColor": "#F4F1DE",
        "colorLabel": "Bạc",
        "availableColors": [
          "#F4F1DE"
        ],
        "material": "Bạc chạm khắc",
        "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Phụ Kiện, mang sắc Bạc, sáng tạo bởi Queenie.",
        "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
        "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
        "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
        "imageUrl": "/uploads/comp_8e0d14ce825b.webp",
        "imageUrls": [
          "/uploads/comp_8e0d14ce825b.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      }
    ]
  },
  {
    "id": "outfit_1791649633801_s63ry",
    "name": "Hạc Nguyệt",
    "creatorName": "Queenie",
    "gender": "Nữ",
    "createdAt": 1791649633801,
    "imageUrl": "/uploads/outfit_5419f8fc465f.webp",
    "imageUrls": [
      "/uploads/outfit_5419f8fc465f.webp",
      "/uploads/outfit_30e6534d2cba.webp",
      "/uploads/outfit_04a2bfef9f72.webp",
      "/uploads/outfit_8a8cf05004dd.webp",
      "/uploads/outfit_73b9edde7386.webp",
      "/uploads/outfit_3a4b95526fbe.webp",
      "/uploads/outfit_fb4a0f35b8c9.webp",
      "/uploads/outfit_51c0d88b74a3.webp",
      "/uploads/outfit_a033e81f5136.webp"
    ],
    "heroColor": "#F4F1DE",
    "colorLabel": "Trắng ngà",
    "introduction": "Hạc Nguyệt thể hiện vẻ đẹp thanh lịch, trang nhã qua gam màu trắng kem và những họa tiết hoa sen, chim hạc tinh tế. Thiết kế mang hơi thở cổ điển nhưng vẫn gần gũi với thời trang hiện đại.\n    Lấy cảm hứng từ hình tượng chim hạc, hoa sen và ánh trăng, bộ trang phục truyền tải tinh thần thanh cao, bình yên và nét đẹp truyền thống Á Đông qua phom áo dáng dài, quần rộng cùng phụ kiện quạt xếp duyên dáng.",
    "components": [
      {
        "id": "item_1791649409130_evp7q",
        "name": "Hạc Nguyệt",
        "category": "bo_trang_phuc",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nữ",
        "heroColor": "#F4F1DE",
        "colorLabel": "Trắng ngà",
        "availableColors": [
          "#F4F1DE"
        ],
        "material": "Lụa tơ tằm, gấm truyền thống",
        "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Bộ Trang Phục, mang sắc Trắng ngà, sáng tạo bởi Queenie.",
        "culturalMeaning": "Trọn bộ trang phục cổ truyền hoàn chỉnh tôn vinh vẻ đẹp di sản dân tộc.",
        "remixTips": "Phối hợp hài hòa cùng các lớp trang phục trong phòng trưng bày.",
        "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
        "imageUrl": "/uploads/comp_5419f8fc465f.webp",
        "imageUrls": [
          "/uploads/comp_5419f8fc465f.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791649427249_x06dc",
        "name": "Hạc Nguyệt",
        "category": "ao_ngoai",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nữ",
        "heroColor": "#F4F1DE",
        "colorLabel": "Trắng ngà",
        "availableColors": [
          "#F4F1DE"
        ],
        "material": "Lụa tơ tằm truyền thống, gấm vân mây",
        "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Áo Chính (Mặt Trước), mang sắc Trắng ngà, sáng tạo bởi Queenie.",
        "culturalMeaning": "Thể hiện vẻ đẹp trang nhã, đoan chính và niềm tự hào di sản truyền thống Việt Nam.",
        "remixTips": "Phối cùng quần lãnh Mỹ A hoặc chân váy, kết hợp phụ kiện đương đại.",
        "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
        "imageUrl": "/uploads/comp_30e6534d2cba.webp",
        "imageUrls": [
          "/uploads/comp_30e6534d2cba.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791649455310_vo8r2",
        "name": "Hạc Nguyệt",
        "category": "ao_ngoai_sau",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nữ",
        "heroColor": "#F4F1DE",
        "colorLabel": "Trắng ngà",
        "availableColors": [
          "#F4F1DE"
        ],
        "material": "Lụa tơ tằm, gấm",
        "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Áo Chính (Mặt Sau), mang sắc Trắng ngà, sáng tạo bởi Queenie.",
        "culturalMeaning": "Mặt sau áo ngoài thể hiện sống áo ngay thẳng, nếp vải buông suông trang nghiêm và thanh thoát.",
        "remixTips": "Đồng điệu màu sắc và chất liệu cùng mặt trước của áo ngoài.",
        "culturalAdvisory": "Giữ phom lưng áo phẳng phiu, sống áo thẳng thớm.",
        "imageUrl": "/uploads/comp_04a2bfef9f72.webp",
        "imageUrls": [
          "/uploads/comp_04a2bfef9f72.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791649474651_73xkc",
        "name": "Hạc Nguyệt",
        "category": "quan_vay",
        "era": "Triều Nguyễn",
        "region": "Nam Bộ / Bắc Bộ",
        "gender": "Nữ",
        "heroColor": "#F4F1DE",
        "colorLabel": "Trắng ngà",
        "availableColors": [
          "#F4F1DE"
        ],
        "material": "Lụa tơ tằm",
        "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Thân Dưới, mang sắc Trắng ngà, sáng tạo bởi Queenie.",
        "culturalMeaning": "Thân dưới suông rộng thoải mái, tượng trưng cho sự mềm mại, nền nã.",
        "remixTips": "Ống suông phóng khoáng dễ dàng phối với giày sneaker trắng hoặc guốc mộc.",
        "culturalAdvisory": "Độ dài chạm mắt cá chân, ống quần thẳng tắp trang nhã.",
        "imageUrl": "/uploads/comp_8a8cf05004dd.webp",
        "imageUrls": [
          "/uploads/comp_8a8cf05004dd.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791649516063_qq1cr",
        "name": "Hạc Nguyệt",
        "category": "giay_dep",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nữ",
        "heroColor": "#F4F1DE",
        "colorLabel": "Trắng ngà",
        "availableColors": [
          "#F4F1DE"
        ],
        "material": "Guốc mộc truyền thống, thêu nhung",
        "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Giày Dép, mang sắc Trắng ngà, sáng tạo bởi Queenie.",
        "culturalMeaning": "Bước đi khoan thai, vững vàng và thanh nhã của người xưa.",
        "remixTips": "Có thể linh hoạt dùng hài thêu cổ truyền hoặc giày modern minimalist.",
        "culturalAdvisory": "Chọn phom dáng êm ái, màu sắc ăn nhập với tổng thể trang phục.",
        "imageUrl": "/uploads/comp_73b9edde7386.webp",
        "imageUrls": [
          "/uploads/comp_73b9edde7386.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791649622672_jls1g",
        "name": "Hạc Nguyệt",
        "category": "phu_kien",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nữ",
        "heroColor": "#D4AF37",
        "colorLabel": "Vàng hoàng yến / Kim",
        "availableColors": [
          "#D4AF37"
        ],
        "material": "Bạc chạm khắc, Ngọc trai",
        "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Phụ Kiện, mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
        "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
        "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
        "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
        "imageUrl": "/uploads/comp_3a4b95526fbe.webp",
        "imageUrls": [
          "/uploads/comp_3a4b95526fbe.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791649603317_vyizx",
        "name": "Hạc Nguyệt",
        "category": "phu_kien",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nữ",
        "heroColor": "#D4AF37",
        "colorLabel": "Vàng hoàng yến / Kim",
        "availableColors": [
          "#D4AF37"
        ],
        "material": "Vàng chạm khắc",
        "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Phụ Kiện, mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
        "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
        "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
        "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
        "imageUrl": "/uploads/comp_fb4a0f35b8c9.webp",
        "imageUrls": [
          "/uploads/comp_fb4a0f35b8c9.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791649587784_w400u",
        "name": "Hạc Nguyệt",
        "category": "phu_kien",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nữ",
        "heroColor": "#F4F1DE",
        "colorLabel": "Trắng ngà",
        "availableColors": [
          "#F4F1DE"
        ],
        "material": "Ngọc trai",
        "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Phụ Kiện, mang sắc Trắng ngà, sáng tạo bởi Queenie.",
        "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
        "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
        "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
        "imageUrl": "/uploads/comp_51c0d88b74a3.webp",
        "imageUrls": [
          "/uploads/comp_51c0d88b74a3.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791649552018_snxhj",
        "name": "Hạc Nguyệt",
        "category": "phu_kien",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nữ",
        "heroColor": "#F4F1DE",
        "colorLabel": "Trắng ngà",
        "availableColors": [
          "#F4F1DE"
        ],
        "material": "Tre, Vải xước",
        "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Phụ Kiện, mang sắc Trắng ngà, sáng tạo bởi Queenie.",
        "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
        "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
        "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
        "imageUrl": "/uploads/comp_a033e81f5136.webp",
        "imageUrls": [
          "/uploads/comp_a033e81f5136.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      }
    ]
  },
  {
    "id": "outfit_1791647898112_ghfrw",
    "name": "Sen Ngọc",
    "creatorName": "Queenie",
    "gender": "Nữ",
    "createdAt": 1791647898112,
    "imageUrl": "/uploads/outfit_f6f288312d13.webp",
    "imageUrls": [
      "/uploads/outfit_f6f288312d13.webp",
      "/uploads/outfit_b93f07cbbf2b.webp",
      "/uploads/outfit_0fa4bffa7012.webp",
      "/uploads/outfit_9e2e084de914.webp",
      "/uploads/outfit_979f17844a1c.webp",
      "/uploads/outfit_d9f34eeb006e.webp",
      "/uploads/outfit_ad121bd19c0b.webp",
      "/uploads/outfit_8f3561acdb4d.webp"
    ],
    "heroColor": "#457B9D",
    "colorLabel": "Lam ngọc",
    "introduction": "Sen Ngọc mang vẻ đẹp dịu dàng, trẻ trung, kết hợp hài hòa giữa nét truyền thống Á Đông và phong cách hiện đại. Sắc xanh ngọc, hồng phấn cùng họa tiết hoa sen tạo nên tổng thể thanh thoát, nữ tính và duyên dáng.\nLấy cảm hứng từ hoa sen và ngọc bích, thiết kế tôn vinh vẻ đẹp thanh khiết, mềm mại của người con gái Á Đông thông qua phom dáng cách điệu, tay áo bèo nhún và phụ kiện tinh xảo.",
    "components": [
      {
        "id": "item_1791647705282_pnd5c",
        "name": "Sen Ngọc",
        "category": "bo_trang_phuc",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nữ",
        "heroColor": "#457B9D",
        "colorLabel": "Lam ngọc",
        "availableColors": [
          "#457B9D"
        ],
        "material": "Lụa tơ tằm",
        "originStory": "Trang phục Sen Ngọc thuộc danh mục Bộ Trang Phục, mang sắc Lam ngọc, sáng tạo bởi Queenie.",
        "culturalMeaning": "Trọn bộ trang phục cổ truyền hoàn chỉnh tôn vinh vẻ đẹp di sản dân tộc.",
        "remixTips": "Phối hợp hài hòa cùng các lớp trang phục trong phòng trưng bày.",
        "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
        "imageUrl": "/uploads/comp_f6f288312d13.webp",
        "imageUrls": [
          "/uploads/comp_f6f288312d13.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647736820_6dlpm",
        "name": "Sen Ngọc",
        "category": "ao_ngoai",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nữ",
        "heroColor": "#457B9D",
        "colorLabel": "Lam ngọc",
        "availableColors": [
          "#457B9D"
        ],
        "material": "Lụa tơ tằm",
        "originStory": "Trang phục Sen Ngọc thuộc danh mục Áo Chính (Mặt Trước), mang sắc Lam ngọc, sáng tạo bởi Queenie.",
        "culturalMeaning": "Thể hiện vẻ đẹp trang nhã, đoan chính và niềm tự hào di sản truyền thống Việt Nam.",
        "remixTips": "Phối cùng quần lãnh Mỹ A hoặc chân váy, kết hợp phụ kiện đương đại.",
        "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
        "imageUrl": "/uploads/comp_b93f07cbbf2b.webp",
        "imageUrls": [
          "/uploads/comp_b93f07cbbf2b.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647750195_r78n2",
        "name": "Sen Ngọc",
        "category": "ao_ngoai_sau",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nữ",
        "heroColor": "#457B9D",
        "colorLabel": "Lam ngọc",
        "availableColors": [
          "#457B9D"
        ],
        "material": "Lụa tơ tằm",
        "originStory": "Trang phục Sen Ngọc thuộc danh mục Áo Chính (Mặt Sau), mang sắc Lam ngọc, sáng tạo bởi Queenie.",
        "culturalMeaning": "Mặt sau áo ngoài thể hiện sống áo ngay thẳng, nếp vải buông suông trang nghiêm và thanh thoát.",
        "remixTips": "Đồng điệu màu sắc và chất liệu cùng mặt trước của áo ngoài.",
        "culturalAdvisory": "Giữ phom lưng áo phẳng phiu, sống áo thẳng thớm.",
        "imageUrl": "/uploads/comp_0fa4bffa7012.webp",
        "imageUrls": [
          "/uploads/comp_0fa4bffa7012.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647772489_z22gn",
        "name": "Sen Ngọc",
        "category": "quan_vay",
        "era": "Triều Nguyễn",
        "region": "Nam Bộ / Bắc Bộ",
        "gender": "Nữ",
        "heroColor": "#D4AF37",
        "colorLabel": "Vàng hoàng yến / Kim",
        "availableColors": [
          "#D4AF37"
        ],
        "material": "Lụa tơ tằm",
        "originStory": "Trang phục Sen Ngọc thuộc danh mục Thân Dưới, mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
        "culturalMeaning": "Thân dưới suông rộng thoải mái, tượng trưng cho sự mềm mại, nền nã.",
        "remixTips": "Ống suông phóng khoáng dễ dàng phối với giày sneaker trắng hoặc guốc mộc.",
        "culturalAdvisory": "Độ dài chạm mắt cá chân, ống quần thẳng tắp trang nhã.",
        "imageUrl": "/uploads/comp_9e2e084de914.webp",
        "imageUrls": [
          "/uploads/comp_9e2e084de914.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647788191_o39ps",
        "name": "Sen Ngọc",
        "category": "giay_dep",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nữ",
        "heroColor": "#457B9D",
        "colorLabel": "Lam ngọc",
        "availableColors": [
          "#457B9D"
        ],
        "material": "Hài thêu nhung",
        "originStory": "Trang phục Sen Ngọc thuộc danh mục Giày Dép, mang sắc Lam ngọc, sáng tạo bởi Queenie.",
        "culturalMeaning": "Bước đi khoan thai, vững vàng và thanh nhã của người xưa.",
        "remixTips": "Có thể linh hoạt dùng hài thêu cổ truyền hoặc giày modern minimalist.",
        "culturalAdvisory": "Chọn phom dáng êm ái, màu sắc ăn nhập với tổng thể trang phục.",
        "imageUrl": "/uploads/comp_979f17844a1c.webp",
        "imageUrls": [
          "/uploads/comp_979f17844a1c.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647884211_704qa",
        "name": "Sen Ngọc",
        "category": "phu_kien",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nữ",
        "heroColor": "#E07A5F",
        "colorLabel": "Hồng cánh sen",
        "availableColors": [
          "#E07A5F"
        ],
        "material": "Gấm",
        "originStory": "Trang phục Sen Ngọc thuộc danh mục Phụ Kiện, mang sắc Hồng cánh sen, sáng tạo bởi Queenie.",
        "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
        "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
        "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
        "imageUrl": "/uploads/comp_d9f34eeb006e.webp",
        "imageUrls": [
          "/uploads/comp_d9f34eeb006e.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647862315_f4twx",
        "name": "Sen Ngọc",
        "category": "phu_kien",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nữ",
        "heroColor": "#D4AF37",
        "colorLabel": "Vàng hoàng yến / Kim",
        "availableColors": [
          "#D4AF37"
        ],
        "material": "Vàng chạm khắc, ngọc trai",
        "originStory": "Trang phục Sen Ngọc thuộc danh mục Phụ Kiện, mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
        "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
        "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
        "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
        "imageUrl": "/uploads/comp_ad121bd19c0b.webp",
        "imageUrls": [
          "/uploads/comp_ad121bd19c0b.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647813703_hyldh",
        "name": "Sen Ngọc",
        "category": "phu_kien",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nữ",
        "heroColor": "#2D6A4F",
        "colorLabel": "Xanh rêu / Phỉ thúy",
        "availableColors": [
          "#2D6A4F"
        ],
        "material": "Bạc chạm khắc, ngọc bích",
        "originStory": "Trang phục Sen Ngọc thuộc danh mục Phụ Kiện, mang sắc Xanh rêu / Phỉ thúy, sáng tạo bởi Queenie.",
        "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
        "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
        "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
        "imageUrl": "/uploads/comp_8f3561acdb4d.webp",
        "imageUrls": [
          "/uploads/comp_8f3561acdb4d.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      }
    ]
  },
  {
    "id": "outfit_1791647595980_mjt9x",
    "name": "Vân Hải Giao Lĩnh",
    "creatorName": "Queenie",
    "gender": "Nam",
    "createdAt": 1791647595980,
    "imageUrl": "/uploads/outfit_069374d5057a.webp",
    "imageUrls": [
      "/uploads/outfit_069374d5057a.webp",
      "/uploads/outfit_fed8c3315bd3.webp",
      "/uploads/outfit_5706f404d010.webp",
      "/uploads/outfit_16c837c41625.webp",
      "/uploads/outfit_4ba4d49cfbd9.webp",
      "/uploads/outfit_631fcd90ed42.webp"
    ],
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "introduction": "Hải Vân Giao Lĩnh là bộ suit nam cách tân được phát triển từ nguyên bản áo Giao Lĩnh — một trong những trang phục cổ xưa và mang đậm bản sắc Đại Việt nhất. Không còn là lễ phục chỉ xuất hiện trong sử sách, thiết kế đã được \"tái sinh\" thành một bộ suit nam thời thượng, kết hợp giữa phom dáng blazer hiện đại và nét vương giả của cổ phục. Bộ suit là lựa chọn hoàn hảo cho người đàn ông đương đại: lịch lãm, mạnh mẽ và đầy tự hào dân tộc.",
    "components": [
      {
        "id": "item_1791647520067_yqgw5",
        "name": "Vân Hải Giao Lĩnh",
        "category": "bo_trang_phuc",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nam",
        "heroColor": "#1D3557",
        "colorLabel": "Xanh chàm",
        "availableColors": [
          "#1D3557"
        ],
        "material": "Cotton",
        "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Bộ Trang Phục, mang sắc Xanh chàm, sáng tạo bởi Queenie.",
        "culturalMeaning": "Trọn bộ trang phục cổ truyền hoàn chỉnh tôn vinh vẻ đẹp di sản dân tộc.",
        "remixTips": "Phối hợp hài hòa cùng các lớp trang phục trong phòng trưng bày.",
        "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
        "imageUrl": "/uploads/comp_069374d5057a.webp",
        "imageUrls": [
          "/uploads/comp_069374d5057a.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647536088_w1z7e",
        "name": "Vân Hải Giao Lĩnh",
        "category": "ao_ngoai",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nam",
        "heroColor": "#1D3557",
        "colorLabel": "Xanh chàm",
        "availableColors": [
          "#1D3557"
        ],
        "material": "Cotton",
        "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Áo Chính (Mặt Trước), mang sắc Xanh chàm, sáng tạo bởi Queenie.",
        "culturalMeaning": "Thể hiện vẻ đẹp trang nhã, đoan chính và niềm tự hào di sản truyền thống Việt Nam.",
        "remixTips": "Phối cùng quần lãnh Mỹ A hoặc chân váy, kết hợp phụ kiện đương đại.",
        "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
        "imageUrl": "/uploads/comp_fed8c3315bd3.webp",
        "imageUrls": [
          "/uploads/comp_fed8c3315bd3.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647595980_fg7ki",
        "name": "Vân Hải Giao Lĩnh",
        "category": "ao_ngoai_sau",
        "era": "Triều Nguyễn",
        "region": "Cố đô Huế",
        "gender": "Nam",
        "heroColor": "#1D3557",
        "colorLabel": "Xanh chàm",
        "availableColors": [
          "#1D3557"
        ],
        "material": "Cotton",
        "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Áo Chính (Mặt Sau), mang sắc Xanh chàm, sáng tạo bởi Queenie.",
        "culturalMeaning": "Mặt sau áo ngoài thể hiện sống áo ngay thẳng, nếp vải buông suông trang nghiêm và thanh thoát.",
        "remixTips": "Đồng điệu màu sắc và chất liệu cùng mặt trước của áo ngoài.",
        "culturalAdvisory": "Giữ phom lưng áo phẳng phiu, sống áo thẳng thớm.",
        "imageUrl": "/uploads/comp_5706f404d010.webp",
        "imageUrls": [
          "/uploads/comp_5706f404d010.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647563218_j9tps",
        "name": "Vân Hải Giao Lĩnh",
        "category": "quan_vay",
        "era": "Triều Nguyễn",
        "region": "Nam Bộ / Bắc Bộ",
        "gender": "Nam",
        "heroColor": "#1D3557",
        "colorLabel": "Xanh chàm",
        "availableColors": [
          "#1D3557"
        ],
        "material": "Cotton",
        "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Thân Dưới, mang sắc Xanh chàm, sáng tạo bởi Queenie.",
        "culturalMeaning": "Thân dưới suông rộng thoải mái, tượng trưng cho sự mềm mại, nền nã.",
        "remixTips": "Ống suông phóng khoáng dễ dàng phối với giày sneaker trắng hoặc guốc mộc.",
        "culturalAdvisory": "Độ dài chạm mắt cá chân, ống quần thẳng tắp trang nhã.",
        "imageUrl": "/uploads/comp_16c837c41625.webp",
        "imageUrls": [
          "/uploads/comp_16c837c41625.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647575246_knvc5",
        "name": "Vân Hải Giao Lĩnh",
        "category": "giay_dep",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nam",
        "heroColor": "#1A1A1A",
        "colorLabel": "Đen",
        "availableColors": [
          "#1A1A1A"
        ],
        "material": "Da",
        "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Giày Dép, mang sắc Đen, sáng tạo bởi Queenie.",
        "culturalMeaning": "Bước đi khoan thai, vững vàng và thanh nhã của người xưa.",
        "remixTips": "Có thể linh hoạt dùng hài thêu cổ truyền hoặc giày modern minimalist.",
        "culturalAdvisory": "Chọn phom dáng êm ái, màu sắc ăn nhập với tổng thể trang phục.",
        "imageUrl": "/uploads/comp_4ba4d49cfbd9.webp",
        "imageUrls": [
          "/uploads/comp_4ba4d49cfbd9.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      },
      {
        "id": "item_1791647591861_xn85e",
        "name": "Vân Hải Giao Lĩnh",
        "category": "phu_kien",
        "era": "Cảm hứng di sản Việt Nam",
        "region": "Việt Nam",
        "gender": "Nam",
        "heroColor": "#1D3557",
        "colorLabel": "Xanh chàm",
        "availableColors": [
          "#1D3557"
        ],
        "material": "Lụa",
        "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Phụ Kiện, mang sắc Xanh chàm, sáng tạo bởi Queenie.",
        "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
        "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
        "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
        "imageUrl": "/uploads/comp_631fcd90ed42.webp",
        "imageUrls": [
          "/uploads/comp_631fcd90ed42.webp"
        ],
        "suitableOccasions": [
          "Dạo Phố & Cafe",
          "Lễ Tốt Nghiệp",
          "Tiệc Cưới & Dự Lễ",
          "Chụp Ảnh Kỷ Yếu"
        ],
        "isCustom": true,
        "creatorName": "Queenie"
      }
    ]
  }
];

export const DEFAULT_COSTUMES: CostumeItem[] = [
  {
    "id": "item_1791650045746_g3mna",
    "name": "Song Ngư Triều Ngọc",
    "category": "ao_ngoai",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nam",
    "heroColor": "#D4AF37",
    "colorLabel": "Vàng hoàng yến / Kim",
    "availableColors": [
      "#D4AF37"
    ],
    "material": "Canvas",
    "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Áo Chính (Mặt Trước), mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
    "culturalMeaning": "Thể hiện vẻ đẹp trang nhã, đoan chính và niềm tự hào di sản truyền thống Việt Nam.",
    "remixTips": "Phối cùng quần lãnh Mỹ A hoặc chân váy, kết hợp phụ kiện đương đại.",
    "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
    "imageUrl": "/uploads/costume_f4e5e8eace09.webp",
    "imageUrls": [
      "/uploads/costume_f4e5e8eace09.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791650057440_zpx9n",
    "name": "Song Ngư Triều Ngọc",
    "category": "ao_ngoai_sau",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nam",
    "heroColor": "#D4AF37",
    "colorLabel": "Vàng hoàng yến / Kim",
    "availableColors": [
      "#D4AF37"
    ],
    "material": "Canvas",
    "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Áo Chính (Mặt Sau), mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
    "culturalMeaning": "Mặt sau áo ngoài thể hiện sống áo ngay thẳng, nếp vải buông suông trang nghiêm và thanh thoát.",
    "remixTips": "Đồng điệu màu sắc và chất liệu cùng mặt trước của áo ngoài.",
    "culturalAdvisory": "Giữ phom lưng áo phẳng phiu, sống áo thẳng thớm.",
    "imageUrl": "/uploads/costume_3ba408de680d.webp",
    "imageUrls": [
      "/uploads/costume_3ba408de680d.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791650076315_bcafi",
    "name": "Song Ngư Triều Ngọc",
    "category": "quan_vay",
    "era": "Triều Nguyễn",
    "region": "Nam Bộ / Bắc Bộ",
    "gender": "Nam",
    "heroColor": "#1A1A1A",
    "colorLabel": "Đen",
    "availableColors": [
      "#1A1A1A"
    ],
    "material": "Da",
    "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Thân Dưới, mang sắc Đen, sáng tạo bởi Queenie.",
    "culturalMeaning": "Thân dưới suông rộng thoải mái, tượng trưng cho sự mềm mại, nền nã.",
    "remixTips": "Ống suông phóng khoáng dễ dàng phối với giày sneaker trắng hoặc guốc mộc.",
    "culturalAdvisory": "Độ dài chạm mắt cá chân, ống quần thẳng tắp trang nhã.",
    "imageUrl": "/uploads/costume_d57a77727cf7.webp",
    "imageUrls": [
      "/uploads/costume_d57a77727cf7.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791650128562_fdlzm",
    "name": "Song Ngư Triều Ngọc",
    "category": "phu_kien",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nam",
    "heroColor": "#D4AF37",
    "colorLabel": "Bạc",
    "availableColors": [
      "#D4AF37"
    ],
    "material": "Bạc",
    "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Phụ Kiện, mang sắc Bạc, sáng tạo bởi Queenie.",
    "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
    "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
    "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
    "imageUrl": "/uploads/costume_a1f7d1c8e03a.webp",
    "imageUrls": [
      "/uploads/costume_a1f7d1c8e03a.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791650029042_918t2",
    "name": "Song Ngư Triều Ngọc",
    "category": "bo_trang_phuc",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nam",
    "heroColor": "#D4AF37",
    "colorLabel": "Vàng hoàng yến / Kim",
    "availableColors": [
      "#D4AF37"
    ],
    "material": "Canvas, Da, Kim Loại",
    "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Bộ Trang Phục, mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
    "culturalMeaning": "Trọn bộ trang phục cổ truyền hoàn chỉnh tôn vinh vẻ đẹp di sản dân tộc.",
    "remixTips": "Phối hợp hài hòa cùng các lớp trang phục trong phòng trưng bày.",
    "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
    "imageUrl": "/uploads/costume_d2ad820f80ac.webp",
    "imageUrls": [
      "/uploads/costume_d2ad820f80ac.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791650089257_94l2n",
    "name": "Song Ngư Triều Ngọc",
    "category": "giay_dep",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nam",
    "heroColor": "#1A1A1A",
    "colorLabel": "Đen",
    "availableColors": [
      "#1A1A1A"
    ],
    "material": "Da",
    "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Giày Dép, mang sắc Đen, sáng tạo bởi Queenie.",
    "culturalMeaning": "Bước đi khoan thai, vững vàng và thanh nhã của người xưa.",
    "remixTips": "Có thể linh hoạt dùng hài thêu cổ truyền hoặc giày modern minimalist.",
    "culturalAdvisory": "Chọn phom dáng êm ái, màu sắc ăn nhập với tổng thể trang phục.",
    "imageUrl": "/uploads/costume_8ca66efe827f.webp",
    "imageUrls": [
      "/uploads/costume_8ca66efe827f.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791650111371_e6cgz",
    "name": "Song Ngư Triều Ngọc",
    "category": "phu_kien",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nam",
    "heroColor": "#F4F1DE",
    "colorLabel": "Bạc",
    "availableColors": [
      "#F4F1DE"
    ],
    "material": "Bạc chạm khắc",
    "originStory": "Trang phục Song Ngư Triều Ngọc thuộc danh mục Phụ Kiện, mang sắc Bạc, sáng tạo bởi Queenie.",
    "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
    "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
    "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
    "imageUrl": "/uploads/costume_8e0d14ce825b.webp",
    "imageUrls": [
      "/uploads/costume_8e0d14ce825b.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791649622672_jls1g",
    "name": "Hạc Nguyệt",
    "category": "phu_kien",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nữ",
    "heroColor": "#D4AF37",
    "colorLabel": "Vàng hoàng yến / Kim",
    "availableColors": [
      "#D4AF37"
    ],
    "material": "Bạc chạm khắc, Ngọc trai",
    "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Phụ Kiện, mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
    "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
    "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
    "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
    "imageUrl": "/uploads/costume_3a4b95526fbe.webp",
    "imageUrls": [
      "/uploads/costume_3a4b95526fbe.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791649409130_evp7q",
    "name": "Hạc Nguyệt",
    "category": "bo_trang_phuc",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nữ",
    "heroColor": "#F4F1DE",
    "colorLabel": "Trắng ngà",
    "availableColors": [
      "#F4F1DE"
    ],
    "material": "Lụa tơ tằm, gấm truyền thống",
    "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Bộ Trang Phục, mang sắc Trắng ngà, sáng tạo bởi Queenie.",
    "culturalMeaning": "Trọn bộ trang phục cổ truyền hoàn chỉnh tôn vinh vẻ đẹp di sản dân tộc.",
    "remixTips": "Phối hợp hài hòa cùng các lớp trang phục trong phòng trưng bày.",
    "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
    "imageUrl": "/uploads/costume_5419f8fc465f.webp",
    "imageUrls": [
      "/uploads/costume_5419f8fc465f.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791649587784_w400u",
    "name": "Hạc Nguyệt",
    "category": "phu_kien",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nữ",
    "heroColor": "#F4F1DE",
    "colorLabel": "Trắng ngà",
    "availableColors": [
      "#F4F1DE"
    ],
    "material": "Ngọc trai",
    "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Phụ Kiện, mang sắc Trắng ngà, sáng tạo bởi Queenie.",
    "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
    "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
    "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
    "imageUrl": "/uploads/costume_51c0d88b74a3.webp",
    "imageUrls": [
      "/uploads/costume_51c0d88b74a3.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791649552018_snxhj",
    "name": "Hạc Nguyệt",
    "category": "phu_kien",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nữ",
    "heroColor": "#F4F1DE",
    "colorLabel": "Trắng ngà",
    "availableColors": [
      "#F4F1DE"
    ],
    "material": "Tre, Vải xước",
    "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Phụ Kiện, mang sắc Trắng ngà, sáng tạo bởi Queenie.",
    "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
    "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
    "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
    "imageUrl": "/uploads/costume_a033e81f5136.webp",
    "imageUrls": [
      "/uploads/costume_a033e81f5136.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791649603317_vyizx",
    "name": "Hạc Nguyệt",
    "category": "phu_kien",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nữ",
    "heroColor": "#D4AF37",
    "colorLabel": "Vàng hoàng yến / Kim",
    "availableColors": [
      "#D4AF37"
    ],
    "material": "Vàng chạm khắc",
    "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Phụ Kiện, mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
    "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
    "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
    "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
    "imageUrl": "/uploads/costume_fb4a0f35b8c9.webp",
    "imageUrls": [
      "/uploads/costume_fb4a0f35b8c9.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791649516063_qq1cr",
    "name": "Hạc Nguyệt",
    "category": "giay_dep",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nữ",
    "heroColor": "#F4F1DE",
    "colorLabel": "Trắng ngà",
    "availableColors": [
      "#F4F1DE"
    ],
    "material": "Guốc mộc truyền thống, thêu nhung",
    "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Giày Dép, mang sắc Trắng ngà, sáng tạo bởi Queenie.",
    "culturalMeaning": "Bước đi khoan thai, vững vàng và thanh nhã của người xưa.",
    "remixTips": "Có thể linh hoạt dùng hài thêu cổ truyền hoặc giày modern minimalist.",
    "culturalAdvisory": "Chọn phom dáng êm ái, màu sắc ăn nhập với tổng thể trang phục.",
    "imageUrl": "/uploads/costume_73b9edde7386.webp",
    "imageUrls": [
      "/uploads/costume_73b9edde7386.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791649455310_vo8r2",
    "name": "Hạc Nguyệt",
    "category": "ao_ngoai_sau",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nữ",
    "heroColor": "#F4F1DE",
    "colorLabel": "Trắng ngà",
    "availableColors": [
      "#F4F1DE"
    ],
    "material": "Lụa tơ tằm, gấm",
    "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Áo Chính (Mặt Sau), mang sắc Trắng ngà, sáng tạo bởi Queenie.",
    "culturalMeaning": "Mặt sau áo ngoài thể hiện sống áo ngay thẳng, nếp vải buông suông trang nghiêm và thanh thoát.",
    "remixTips": "Đồng điệu màu sắc và chất liệu cùng mặt trước của áo ngoài.",
    "culturalAdvisory": "Giữ phom lưng áo phẳng phiu, sống áo thẳng thớm.",
    "imageUrl": "/uploads/costume_04a2bfef9f72.webp",
    "imageUrls": [
      "/uploads/costume_04a2bfef9f72.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791649427249_x06dc",
    "name": "Hạc Nguyệt",
    "category": "ao_ngoai",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nữ",
    "heroColor": "#F4F1DE",
    "colorLabel": "Trắng ngà",
    "availableColors": [
      "#F4F1DE"
    ],
    "material": "Lụa tơ tằm truyền thống, gấm vân mây",
    "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Áo Chính (Mặt Trước), mang sắc Trắng ngà, sáng tạo bởi Queenie.",
    "culturalMeaning": "Thể hiện vẻ đẹp trang nhã, đoan chính và niềm tự hào di sản truyền thống Việt Nam.",
    "remixTips": "Phối cùng quần lãnh Mỹ A hoặc chân váy, kết hợp phụ kiện đương đại.",
    "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
    "imageUrl": "/uploads/costume_30e6534d2cba.webp",
    "imageUrls": [
      "/uploads/costume_30e6534d2cba.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791649474651_73xkc",
    "name": "Hạc Nguyệt",
    "category": "quan_vay",
    "era": "Triều Nguyễn",
    "region": "Nam Bộ / Bắc Bộ",
    "gender": "Nữ",
    "heroColor": "#F4F1DE",
    "colorLabel": "Trắng ngà",
    "availableColors": [
      "#F4F1DE"
    ],
    "material": "Lụa tơ tằm",
    "originStory": "Trang phục Hạc Nguyệt thuộc danh mục Thân Dưới, mang sắc Trắng ngà, sáng tạo bởi Queenie.",
    "culturalMeaning": "Thân dưới suông rộng thoải mái, tượng trưng cho sự mềm mại, nền nã.",
    "remixTips": "Ống suông phóng khoáng dễ dàng phối với giày sneaker trắng hoặc guốc mộc.",
    "culturalAdvisory": "Độ dài chạm mắt cá chân, ống quần thẳng tắp trang nhã.",
    "imageUrl": "/uploads/costume_8a8cf05004dd.webp",
    "imageUrls": [
      "/uploads/costume_8a8cf05004dd.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647536088_w1z7e",
    "name": "Vân Hải Giao Lĩnh",
    "category": "ao_ngoai",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "availableColors": [
      "#1D3557"
    ],
    "material": "Cotton",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Áo Chính (Mặt Trước), mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Thể hiện vẻ đẹp trang nhã, đoan chính và niềm tự hào di sản truyền thống Việt Nam.",
    "remixTips": "Phối cùng quần lãnh Mỹ A hoặc chân váy, kết hợp phụ kiện đương đại.",
    "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
    "imageUrl": "/uploads/costume_fed8c3315bd3.webp",
    "imageUrls": [
      "/uploads/costume_fed8c3315bd3.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647520067_yqgw5",
    "name": "Vân Hải Giao Lĩnh",
    "category": "bo_trang_phuc",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "availableColors": [
      "#1D3557"
    ],
    "material": "Cotton",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Bộ Trang Phục, mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Trọn bộ trang phục cổ truyền hoàn chỉnh tôn vinh vẻ đẹp di sản dân tộc.",
    "remixTips": "Phối hợp hài hòa cùng các lớp trang phục trong phòng trưng bày.",
    "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
    "imageUrl": "/uploads/costume_069374d5057a.webp",
    "imageUrls": [
      "/uploads/costume_069374d5057a.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647591861_xn85e",
    "name": "Vân Hải Giao Lĩnh",
    "category": "phu_kien",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "availableColors": [
      "#1D3557"
    ],
    "material": "Lụa",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Phụ Kiện, mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
    "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
    "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
    "imageUrl": "/uploads/costume_631fcd90ed42.webp",
    "imageUrls": [
      "/uploads/costume_631fcd90ed42.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647595980_fg7ki",
    "name": "Vân Hải Giao Lĩnh",
    "category": "ao_ngoai_sau",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "availableColors": [
      "#1D3557"
    ],
    "material": "Cotton",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Áo Chính (Mặt Sau), mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Mặt sau áo ngoài thể hiện sống áo ngay thẳng, nếp vải buông suông trang nghiêm và thanh thoát.",
    "remixTips": "Đồng điệu màu sắc và chất liệu cùng mặt trước của áo ngoài.",
    "culturalAdvisory": "Giữ phom lưng áo phẳng phiu, sống áo thẳng thớm.",
    "imageUrl": "/uploads/costume_5706f404d010.webp",
    "imageUrls": [
      "/uploads/costume_5706f404d010.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647563218_j9tps",
    "name": "Vân Hải Giao Lĩnh",
    "category": "quan_vay",
    "era": "Triều Nguyễn",
    "region": "Nam Bộ / Bắc Bộ",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "availableColors": [
      "#1D3557"
    ],
    "material": "Cotton",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Thân Dưới, mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Thân dưới suông rộng thoải mái, tượng trưng cho sự mềm mại, nền nã.",
    "remixTips": "Ống suông phóng khoáng dễ dàng phối với giày sneaker trắng hoặc guốc mộc.",
    "culturalAdvisory": "Độ dài chạm mắt cá chân, ống quần thẳng tắp trang nhã.",
    "imageUrl": "/uploads/costume_16c837c41625.webp",
    "imageUrls": [
      "/uploads/costume_16c837c41625.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647575246_knvc5",
    "name": "Vân Hải Giao Lĩnh",
    "category": "giay_dep",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nam",
    "heroColor": "#1A1A1A",
    "colorLabel": "Đen",
    "availableColors": [
      "#1A1A1A"
    ],
    "material": "Da",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Giày Dép, mang sắc Đen, sáng tạo bởi Queenie.",
    "culturalMeaning": "Bước đi khoan thai, vững vàng và thanh nhã của người xưa.",
    "remixTips": "Có thể linh hoạt dùng hài thêu cổ truyền hoặc giày modern minimalist.",
    "culturalAdvisory": "Chọn phom dáng êm ái, màu sắc ăn nhập với tổng thể trang phục.",
    "imageUrl": "/uploads/costume_4ba4d49cfbd9.webp",
    "imageUrls": [
      "/uploads/costume_4ba4d49cfbd9.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791646971470_31swd",
    "name": "Vân Hải Giao Lĩnh",
    "category": "quan_vay",
    "era": "Triều Nguyễn",
    "region": "Nam Bộ / Bắc Bộ",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "availableColors": [
      "#1D3557"
    ],
    "material": "Cotton",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Thân Dưới, mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Thân dưới suông rộng thoải mái, tượng trưng cho sự mềm mại, nền nã.",
    "remixTips": "Ống suông phóng khoáng dễ dàng phối với giày sneaker trắng hoặc guốc mộc.",
    "culturalAdvisory": "Độ dài chạm mắt cá chân, ống quần thẳng tắp trang nhã.",
    "imageUrl": "/uploads/costume_16c837c41625.webp",
    "imageUrls": [
      "/uploads/costume_16c837c41625.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791646960611_sxsjk",
    "name": "Vân Hải Giao Lĩnh",
    "category": "ao_ngoai_sau",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "availableColors": [
      "#1D3557"
    ],
    "material": "Cotton",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Áo Chính (Mặt Sau), mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Mặt sau áo ngoài thể hiện sống áo ngay thẳng, nếp vải buông suông trang nghiêm và thanh thoát.",
    "remixTips": "Đồng điệu màu sắc và chất liệu cùng mặt trước của áo ngoài.",
    "culturalAdvisory": "Giữ phom lưng áo phẳng phiu, sống áo thẳng thớm.",
    "imageUrl": "/uploads/costume_5706f404d010.webp",
    "imageUrls": [
      "/uploads/costume_5706f404d010.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791646986209_lcugc",
    "name": "Vân Hải Giao Lĩnh",
    "category": "giay_dep",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nam",
    "heroColor": "#1A1A1A",
    "colorLabel": "Đen",
    "availableColors": [
      "#1A1A1A"
    ],
    "material": "Da",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Giày Dép, mang sắc Đen, sáng tạo bởi Queenie.",
    "culturalMeaning": "Bước đi khoan thai, vững vàng và thanh nhã của người xưa.",
    "remixTips": "Có thể linh hoạt dùng hài thêu cổ truyền hoặc giày modern minimalist.",
    "culturalAdvisory": "Chọn phom dáng êm ái, màu sắc ăn nhập với tổng thể trang phục.",
    "imageUrl": "/uploads/costume_4ba4d49cfbd9.webp",
    "imageUrls": [
      "/uploads/costume_4ba4d49cfbd9.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791634214130_kowvf",
    "name": "Vân Hải Giao Lĩnh",
    "category": "ao_ngoai",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "secondaryColor": "",
    "material": "cotton",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Áo Chính (Mặt Trước), mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Thể hiện vẻ đẹp trang nhã, đoan chính và niềm tự hào di sản truyền thống Việt Nam.",
    "remixTips": "Phối cùng quần lãnh Mỹ A hoặc chân váy, kết hợp phụ kiện đương đại.",
    "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
    "imageUrl": "/uploads/costume_986376af53e8.webp",
    "imageUrls": [
      "/uploads/costume_986376af53e8.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791633955769_0a7do",
    "name": "Vân Hải Giao Lĩnh",
    "category": "bo_trang_phuc",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "secondaryColor": "",
    "material": "cotton",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Bộ Trang Phục, mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Trọn bộ trang phục cổ truyền hoàn chỉnh tôn vinh vẻ đẹp di sản dân tộc.",
    "remixTips": "Phối hợp hài hòa cùng các lớp trang phục trong phòng trưng bày.",
    "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
    "imageUrl": "/uploads/costume_7e554987eacf.webp",
    "imageUrls": [
      "/uploads/costume_7e554987eacf.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791634343772_5zdep",
    "name": "Vân Hải Giao Lĩnh",
    "category": "phu_kien",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "secondaryColor": "",
    "material": "cotton",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Phụ Kiện, mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
    "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
    "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
    "imageUrl": "/uploads/costume_077d0a71c5b4.webp",
    "imageUrls": [
      "/uploads/costume_077d0a71c5b4.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791634372265_6ucpc",
    "name": "Vân Hải Giao Lĩnh",
    "category": "giay_dep",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nam",
    "heroColor": "#1A1A1A",
    "colorLabel": "Đen",
    "secondaryColor": "",
    "material": "Da",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Giày Dép, mang sắc Đen, sáng tạo bởi Queenie.",
    "culturalMeaning": "Bước đi khoan thai, vững vàng và thanh nhã của người xưa.",
    "remixTips": "Có thể linh hoạt dùng hài thêu cổ truyền hoặc giày modern minimalist.",
    "culturalAdvisory": "Chọn phom dáng êm ái, màu sắc ăn nhập với tổng thể trang phục.",
    "imageUrl": "/uploads/costume_ccb869845fa0.webp",
    "imageUrls": [
      "/uploads/costume_ccb869845fa0.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791634256213_xfozi",
    "name": "Vân Hải Giao Lĩnh",
    "category": "ao_ngoai_sau",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "secondaryColor": "",
    "material": "cotton",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Áo Chính (Mặt Sau), mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Mặt sau áo ngoài thể hiện sống áo ngay thẳng, nếp vải buông suông trang nghiêm và thanh thoát.",
    "remixTips": "Đồng điệu màu sắc và chất liệu cùng mặt trước của áo ngoài.",
    "culturalAdvisory": "Giữ phom lưng áo phẳng phiu, sống áo thẳng thớm.",
    "imageUrl": "/uploads/costume_b7160d20c676.webp",
    "imageUrls": [
      "/uploads/costume_b7160d20c676.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791634284482_81k1g",
    "name": "Vân Hải Giao Lĩnh",
    "category": "quan_vay",
    "era": "Triều Nguyễn",
    "region": "Nam Bộ / Bắc Bộ",
    "gender": "Nam",
    "heroColor": "#1D3557",
    "colorLabel": "Xanh chàm",
    "secondaryColor": "",
    "material": "cotton",
    "originStory": "Trang phục Vân Hải Giao Lĩnh thuộc danh mục Thân Dưới, mang sắc Xanh chàm, sáng tạo bởi Queenie.",
    "culturalMeaning": "Thân dưới suông rộng thoải mái, tượng trưng cho sự mềm mại, nền nã.",
    "remixTips": "Ống suông phóng khoáng dễ dàng phối với giày sneaker trắng hoặc guốc mộc.",
    "culturalAdvisory": "Độ dài chạm mắt cá chân, ống quần thẳng tắp trang nhã.",
    "imageUrl": "/uploads/costume_fc6975b78528.webp",
    "imageUrls": [
      "/uploads/costume_fc6975b78528.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647705282_pnd5c",
    "name": "Sen Ngọc",
    "category": "bo_trang_phuc",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nữ",
    "heroColor": "#457B9D",
    "colorLabel": "Lam ngọc",
    "availableColors": [
      "#457B9D"
    ],
    "material": "Lụa tơ tằm",
    "originStory": "Trang phục Sen Ngọc thuộc danh mục Bộ Trang Phục, mang sắc Lam ngọc, sáng tạo bởi Queenie.",
    "culturalMeaning": "Trọn bộ trang phục cổ truyền hoàn chỉnh tôn vinh vẻ đẹp di sản dân tộc.",
    "remixTips": "Phối hợp hài hòa cùng các lớp trang phục trong phòng trưng bày.",
    "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
    "imageUrl": "/uploads/comp_f6f288312d13.webp",
    "imageUrls": [
      "/uploads/comp_f6f288312d13.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647736820_6dlpm",
    "name": "Sen Ngọc",
    "category": "ao_ngoai",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nữ",
    "heroColor": "#457B9D",
    "colorLabel": "Lam ngọc",
    "availableColors": [
      "#457B9D"
    ],
    "material": "Lụa tơ tằm",
    "originStory": "Trang phục Sen Ngọc thuộc danh mục Áo Chính (Mặt Trước), mang sắc Lam ngọc, sáng tạo bởi Queenie.",
    "culturalMeaning": "Thể hiện vẻ đẹp trang nhã, đoan chính và niềm tự hào di sản truyền thống Việt Nam.",
    "remixTips": "Phối cùng quần lãnh Mỹ A hoặc chân váy, kết hợp phụ kiện đương đại.",
    "culturalAdvisory": "Giữ phom dáng thanh thoát, đứng áo và chỉn chu.",
    "imageUrl": "/uploads/comp_b93f07cbbf2b.webp",
    "imageUrls": [
      "/uploads/comp_b93f07cbbf2b.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647750195_r78n2",
    "name": "Sen Ngọc",
    "category": "ao_ngoai_sau",
    "era": "Triều Nguyễn",
    "region": "Cố đô Huế",
    "gender": "Nữ",
    "heroColor": "#457B9D",
    "colorLabel": "Lam ngọc",
    "availableColors": [
      "#457B9D"
    ],
    "material": "Lụa tơ tằm",
    "originStory": "Trang phục Sen Ngọc thuộc danh mục Áo Chính (Mặt Sau), mang sắc Lam ngọc, sáng tạo bởi Queenie.",
    "culturalMeaning": "Mặt sau áo ngoài thể hiện sống áo ngay thẳng, nếp vải buông suông trang nghiêm và thanh thoát.",
    "remixTips": "Đồng điệu màu sắc và chất liệu cùng mặt trước của áo ngoài.",
    "culturalAdvisory": "Giữ phom lưng áo phẳng phiu, sống áo thẳng thớm.",
    "imageUrl": "/uploads/comp_0fa4bffa7012.webp",
    "imageUrls": [
      "/uploads/comp_0fa4bffa7012.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647772489_z22gn",
    "name": "Sen Ngọc",
    "category": "quan_vay",
    "era": "Triều Nguyễn",
    "region": "Nam Bộ / Bắc Bộ",
    "gender": "Nữ",
    "heroColor": "#D4AF37",
    "colorLabel": "Vàng hoàng yến / Kim",
    "availableColors": [
      "#D4AF37"
    ],
    "material": "Lụa tơ tằm",
    "originStory": "Trang phục Sen Ngọc thuộc danh mục Thân Dưới, mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
    "culturalMeaning": "Thân dưới suông rộng thoải mái, tượng trưng cho sự mềm mại, nền nã.",
    "remixTips": "Ống suông phóng khoáng dễ dàng phối với giày sneaker trắng hoặc guốc mộc.",
    "culturalAdvisory": "Độ dài chạm mắt cá chân, ống quần thẳng tắp trang nhã.",
    "imageUrl": "/uploads/comp_9e2e084de914.webp",
    "imageUrls": [
      "/uploads/comp_9e2e084de914.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647788191_o39ps",
    "name": "Sen Ngọc",
    "category": "giay_dep",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nữ",
    "heroColor": "#457B9D",
    "colorLabel": "Lam ngọc",
    "availableColors": [
      "#457B9D"
    ],
    "material": "Hài thêu nhung",
    "originStory": "Trang phục Sen Ngọc thuộc danh mục Giày Dép, mang sắc Lam ngọc, sáng tạo bởi Queenie.",
    "culturalMeaning": "Bước đi khoan thai, vững vàng và thanh nhã của người xưa.",
    "remixTips": "Có thể linh hoạt dùng hài thêu cổ truyền hoặc giày modern minimalist.",
    "culturalAdvisory": "Chọn phom dáng êm ái, màu sắc ăn nhập với tổng thể trang phục.",
    "imageUrl": "/uploads/comp_979f17844a1c.webp",
    "imageUrls": [
      "/uploads/comp_979f17844a1c.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647884211_704qa",
    "name": "Sen Ngọc",
    "category": "phu_kien",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nữ",
    "heroColor": "#E07A5F",
    "colorLabel": "Hồng cánh sen",
    "availableColors": [
      "#E07A5F"
    ],
    "material": "Gấm",
    "originStory": "Trang phục Sen Ngọc thuộc danh mục Phụ Kiện, mang sắc Hồng cánh sen, sáng tạo bởi Queenie.",
    "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
    "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
    "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
    "imageUrl": "/uploads/comp_d9f34eeb006e.webp",
    "imageUrls": [
      "/uploads/comp_d9f34eeb006e.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647862315_f4twx",
    "name": "Sen Ngọc",
    "category": "phu_kien",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nữ",
    "heroColor": "#D4AF37",
    "colorLabel": "Vàng hoàng yến / Kim",
    "availableColors": [
      "#D4AF37"
    ],
    "material": "Vàng chạm khắc, ngọc trai",
    "originStory": "Trang phục Sen Ngọc thuộc danh mục Phụ Kiện, mang sắc Vàng hoàng yến / Kim, sáng tạo bởi Queenie.",
    "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
    "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
    "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
    "imageUrl": "/uploads/comp_ad121bd19c0b.webp",
    "imageUrls": [
      "/uploads/comp_ad121bd19c0b.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  },
  {
    "id": "item_1791647813703_hyldh",
    "name": "Sen Ngọc",
    "category": "phu_kien",
    "era": "Cảm hứng di sản Việt Nam",
    "region": "Việt Nam",
    "gender": "Nữ",
    "heroColor": "#2D6A4F",
    "colorLabel": "Xanh rêu / Phỉ thúy",
    "availableColors": [
      "#2D6A4F"
    ],
    "material": "Bạc chạm khắc, ngọc bích",
    "originStory": "Trang phục Sen Ngọc thuộc danh mục Phụ Kiện, mang sắc Xanh rêu / Phỉ thúy, sáng tạo bởi Queenie.",
    "culturalMeaning": "Điểm xuyết vẻ tinh tế, quý phái và cốt cách người mặc.",
    "remixTips": "Túi tote lụa, kính retro hoặc khăn vấn tạo điểm nhấn di sản.",
    "culturalAdvisory": "Phối tiết chế tinh tế, tránh rườm rà làm lu mờ trang phục chính.",
    "imageUrl": "/uploads/comp_8f3561acdb4d.webp",
    "imageUrls": [
      "/uploads/comp_8f3561acdb4d.webp"
    ],
    "suitableOccasions": [
      "Dạo Phố & Cafe",
      "Lễ Tốt Nghiệp",
      "Tiệc Cưới & Dự Lễ",
      "Chụp Ảnh Kỷ Yếu"
    ],
    "isCustom": true,
    "creatorName": "Queenie"
  }
];

export const DEFAULT_LOOKBOOKS: LookbookItem[] = [
  {
    "id": "lookbook_1791650214987",
    "title": "Song Ngư Triều Ngọc",
    "occasion": "Tự do",
    "description": "Thiết kế tái hiện lại vẻ đẹp tao nhã với thân áo kế thừa vạt chéo nẹp thẳng mực thước từ áo Giao Lĩnh truyền thống. Tay áo mượn cảm hứng từ dáng tay buông rủ kiêu sa của áo Nhật Bình nhưng đã được cách tân thành phom suông bồng nhẹ, mang lại sự linh hoạt, cá tính cho người mặc. Đặc biệt, chính là họa tiết song ngư dựa trên điển tích \"Song Ngư Vọng Nguyệt\" hình tượng đôi cá chép mềm mại bơi ngược dòng và giao nhau tượng trưng cho sự âm dương hòa hợp. Hình ảnh \" Ngự Long\" lấy cảm hứng từ thời nhà Nguyễn, nhà Lê với mong muốn gửi gắm sự phồn vinh, thịnh vượng và sức mạnh của dân tộc.",
    "creatorName": "Queenie",
    "gender": "Nam",
    "imageUrl": "/uploads/lookbook_89a6aa05a1b7.webp",
    "imageUrls": [
      "/uploads/lookbook_89a6aa05a1b7.webp",
      "/uploads/lookbook_4e6750f86ec1.webp"
    ],
    "fullOutfitImage": "/uploads/lookbook_89a6aa05a1b7.webp",
    "introduction": "Song Ngư Triều Ngọc ra đời như một chiếc cầu nối tinh tế giữa di sản ngàn năm và nhịp sống đô thị hiện đại. Dưới góc nhìn tối giản, nam tính và đầy chiều sâu nghệ thuật thiết kế đã biến di sản không chỉ là hoài niệm và được thấy ở mỗi dịp lễ hay trong bảo tàng mà trở thành trang phục ứng dụng mang đầy bản sắc dân tộc.",
    "outerId": "item_1791650045746_g3mna",
    "bottomId": "item_1791650076315_bcafi",
    "accessoryId": "item_1791650128562_fdlzm",
    "footwearId": "item_1791650089257_94l2n"
  },
  {
    "id": "lookbook_1791649845819",
    "title": "Hạc Nguyệt",
    "occasion": "Tự do",
    "description": "Lấy cảm hứng từ hình tượng chim hạc, hoa sen và ánh trăng, bộ trang phục truyền tải tinh thần thanh cao, bình yên và nét đẹp truyền thống Á Đông qua phom áo dáng dài, quần rộng cùng phụ kiện quạt xếp duyên dáng.",
    "creatorName": "Queenie",
    "gender": "Nữ",
    "imageUrl": "/uploads/lookbook_ff99522bfa49.webp",
    "imageUrls": [
      "/uploads/lookbook_ff99522bfa49.webp",
      "/uploads/lookbook_27547d3106e2.webp"
    ],
    "fullOutfitImage": "/uploads/lookbook_ff99522bfa49.webp",
    "introduction": "Hạc Nguyệt thể hiện vẻ đẹp thanh lịch, trang nhã qua gam màu trắng kem và những họa tiết hoa sen, chim hạc tinh tế. Thiết kế mang hơi thở cổ điển nhưng vẫn gần gũi với thời trang hiện đại.",
    "outerId": "item_1791649427249_x06dc",
    "bottomId": "item_1791649474651_73xkc",
    "accessoryId": "item_1791649622672_jls1g",
    "footwearId": "item_1791649516063_qq1cr"
  },
  {
    "id": "lookbook_1791647936585",
    "title": "Sen Ngọc",
    "occasion": "Tự do",
    "description": "Bản phối phong cách cổ phục Việt Nam.",
    "creatorName": "Queenie",
    "gender": "Nữ",
    "imageUrl": "/uploads/lookbook_6fe23edefeeb.webp",
    "imageUrls": [
      "/uploads/lookbook_6fe23edefeeb.webp",
      "/uploads/lookbook_504ccaef1988.webp"
    ],
    "fullOutfitImage": "/uploads/lookbook_6fe23edefeeb.webp",
    "introduction": "Sen Ngọc mang vẻ đẹp dịu dàng, trẻ trung, kết hợp hài hòa giữa nét truyền thống Á Đông và phong cách hiện đại. Sắc xanh ngọc, hồng phấn cùng họa tiết hoa sen tạo nên tổng thể thanh thoát, nữ tính và duyên dáng. Lấy cảm hứng từ hoa sen và ngọc bích, thiết kế tôn vinh vẻ đẹp thanh khiết, mềm mại của người con gái Á Đông thông qua phom dáng cách điệu, tay áo bèo nhún và phụ kiện tinh xảo.",
    "outerId": "item_1791647736820_6dlpm",
    "bottomId": "item_1791647772489_z22gn",
    "accessoryId": "item_1791647884211_704qa",
    "footwearId": "item_1791647788191_o39ps"
  },
  {
    "id": "lookbook_1791647642505",
    "title": "Vân Hải Giao Lĩnh",
    "occasion": "Tự do",
    "description": "Bản phối phong cách cổ phục Việt Nam.",
    "creatorName": "Queenie",
    "gender": "Nam",
    "imageUrl": "/uploads/lookbook_5d59d73e689c.webp",
    "imageUrls": [
      "/uploads/lookbook_5d59d73e689c.webp",
      "/uploads/lookbook_93026fcc69a0.webp"
    ],
    "fullOutfitImage": "/uploads/lookbook_5d59d73e689c.webp",
    "introduction": "Hải Vân Giao Lĩnh là bộ suit nam cách tân được phát triển từ nguyên bản áo Giao Lĩnh — một trong những trang phục cổ xưa và mang đậm bản sắc Đại Việt nhất. Không còn là lễ phục chỉ xuất hiện trong sử sách, thiết kế đã được \"tái sinh\" thành một bộ suit nam thời thượng, kết hợp giữa phom dáng blazer hiện đại và nét vương giả của cổ phục. Bộ suit là lựa chọn hoàn hảo cho người đàn ông đương đại: lịch lãm, mạnh mẽ và đầy tự hào dân tộc.",
    "outerId": "item_1791634214130_kowvf",
    "bottomId": "item_1791646971470_31swd",
    "accessoryId": "item_1791647591861_xn85e",
    "footwearId": "item_1791646986209_lcugc"
  }
];
