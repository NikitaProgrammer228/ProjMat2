import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function POST(request) {
  try {
    const { title, date, excerpt, cover, body } = await request.json();

    // Создаем slug из заголовка
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Создаем содержимое markdown файла
    const frontmatter = {
      title,
      date,
      excerpt,
      cover: cover || null
    };

    const markdownContent = matter.stringify(body, frontmatter);

    // Путь к файлу
    const postsDir = path.join(process.cwd(), 'content', 'posts');
    const filePath = path.join(postsDir, `${slug}.md`);

    // Создаем директорию если не существует
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true });
    }

    // Записываем файл
    fs.writeFileSync(filePath, markdownContent, 'utf8');

    return Response.json({ 
      success: true, 
      slug,
      message: 'Пост успешно создан' 
    });

  } catch (error) {
    console.error('Error creating post:', error);
    return Response.json(
      { success: false, error: 'Ошибка при создании поста' },
      { status: 500 }
    );
  }
}
