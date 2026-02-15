import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, privacy } = body;

    // Валидация
    if (!name || !phone || !privacy) {
      return NextResponse.json(
        { error: 'Пожалуйста, заполните все обязательные поля' },
        { status: 400 }
      );
    }

    const emailBody = `
Новая заявка с формы обратной связи:

Имя: ${name}
Компания: ${company || 'Не указано'}
Телефон: ${phone}
Согласие на обработку данных: ${privacy ? 'Да' : 'Нет'}

Дата отправки: ${new Date().toLocaleString('ru-RU')}
    `;

    // Попытка отправить email через nodemailer, если он установлен и настроен
    try {
      if (process.env.SMTP_HOST) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            // ⬇️⬇️⬇️ УЧЕТНЫЕ ДАННЫЕ ДЛЯ SMTP (для Gmail используйте пароль приложения) ⬇️⬇️⬇️
            user: process.env.SMTP_USER || 'example@gmail.com', // ⬅️ EMAIL ДЛЯ АВТОРИЗАЦИИ
            pass: process.env.SMTP_PASS, // ⬅️ ПАРОЛЬ ИЛИ ПАРОЛЬ ПРИЛОЖЕНИЯ
            // ⬆️⬆️⬆️ УЧЕТНЫЕ ДАННЫЕ ДЛЯ SMTP ⬆️⬆️⬆️
          },
        });

        await transporter.sendMail({
          // ⬇️⬇️⬇️ EMAIL ОТПРАВИТЕЛЯ (ОТ КОГО) ⬇️⬇️⬇️
          from: process.env.SMTP_FROM || process.env.SMTP_USER || 'example@gmail.com', // ⬅️ ОТПРАВКА ИЗ ЭТОГО EMAIL
          // ⬆️⬆️⬆️ EMAIL ОТПРАВИТЕЛЯ (ОТ КОГО) ⬆️⬆️⬆️
          // ⬇️⬇️⬇️ EMAIL ПОЛУЧАТЕЛЯ (КОМУ) ⬇️⬇️⬇️
          to: process.env.EMAIL_TO || 'example@gmail.com', // ⬅️ ОТПРАВКА НА ЭТОТ EMAIL
          // ⬆️⬆️⬆️ EMAIL ПОЛУЧАТЕЛЯ (КОМУ) ⬆️⬆️⬆️
          subject: 'Новая заявка с формы обратной связи - Тропа Нартов',
          text: emailBody,
          html: `
            <h2>Новая заявка с формы обратной связи</h2>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Компания:</strong> ${company || 'Не указано'}</p>
            <p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>Согласие на обработку данных:</strong> ${privacy ? 'Да' : 'Нет'}</p>
            <p><strong>Дата отправки:</strong> ${new Date().toLocaleString('ru-RU')}</p>
          `,
        });

        console.log('Email sent successfully');
      } else {
        // Если nodemailer не установлен или не настроен, логируем данные
        console.log('=== FORM SUBMISSION (Email not configured) ===');
        console.log('Form submission:', { name, company, phone, privacy });
        console.log('Email body:', emailBody);
        console.log('==============================================');
        console.log('Для отправки email установите nodemailer: npm install nodemailer');
        console.log('И настройте переменные окружения в .env.local:');
        console.log('SMTP_HOST=smtp.gmail.com');
        console.log('SMTP_PORT=587');
        console.log('SMTP_USER=example@gmail.com');
        console.log('SMTP_PASS=your-app-password');
        console.log('SMTP_FROM=example@gmail.com');
        console.log('EMAIL_TO=example@gmail.com');
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Продолжаем выполнение, даже если отправка email не удалась
      // В продакшене можно добавить отправку в очередь или логирование ошибок
    }

    return NextResponse.json(
      { message: 'Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.' },
      { status: 500 }
    );
  }
}

