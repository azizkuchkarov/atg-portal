import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Ochistka2Img } from '@/components/wsk2zonaOchistka2.jsx'

export function GPA() {
  return (
    <>
      <div className="my-16 xl:max-w-none">
        <Heading level={2} id="gpa"></Heading>
        <p>
          Газоперекачивающий агрегат (ГПА) - предназначен для компримирования
          природного газа на компрессорных станциях (КС) газопроводов и
          подземных хранилищ газа (ПХГ).
        </p>
        <Ochistka2Img
          link={
            'https://ik.imagekit.io/ATG/Gas_turbines.png?updatedAt=1686892164779'
          }
        />

        <ul>
          Состав ГПА:
          <li>нагнетатель природного газа,</li>
          <li>привод нагнетателя,</li>
          <li>
            всасывающее и выхлопное устройство (в случае газотурбинного
            привода),
          </li>
          <li>система автоматики,</li>
          <li>маслосистема,</li>
          <li>топливовоздушные и масляные коммуникации,</li>
          <li>вспомогательное оборудование.</li>
        </ul>

        <ul>
          ГПА различают: по типу нагнетателей:
          <li>- поршневые газомоторные компрессоры (газомотокомпрессоры),</li>
          <li>- ГПА с центробежными нагнетателями;</li>
        </ul>

        <ul>
          по типу привода:
          <li>
            - с газовым двигателем внутреннего сгорания (газомоторные
            двигатели),
          </li>
          <li>
            <ul>
              - с газотурбинным приводом:
              <li>- агрегаты со стационарной газотурбинной установкой,</li>
              <li>
                - с приводами от газотурбинных двигателей авиационного и
                судового типов
              </li>
              <li>- с электроприводом.</li>
              Поршневой газомоторный компрессор - ГПА, состоит из двухтактного
              или 4- тактного газомоторного двигателя (или электродвигателя) и
              непосредственно соединенного с ним горизонтального поршневого
              компрессора. Подразделяются на агрегаты низкого, среднего и
              высокого давлений:
            </ul>
          </li>
          - низкого давления (0,3-2 МПа) - используются: - главным образом, на
          головных КС при транспортировке газа с истощённых месторождений и
          попутного нефтяного газа (ПНГ) с промыслов, - на КС для подачи
          низконапорных искусственных горючих газов. - среднего давления (2-5
          МПа) - работают в основном на промежуточных КС для увеличения
          пропускной мощности газопроводов. - высокого давления (9,8-12 МПа) -
          устанавливают на КС для закачки газа в ПХГ. Газомотокомпрессоры
          высокоэффективны в условиях переменных мощностей и степеней сжатия
          свыше 1,3. Основные достоинства этих ГПА: - надёжность в эксплуатации;
          - длительный срок службы; - способность работать в широком диапазоне
          давлений; - возможность регулирования производительности за счёт
          изменения оборотов агрегатов и объёма т.н. вредного пространства в
          компрессорных цилиндрах, - возможность создания больших давлений в
          них. КПД современных газомотокомпрессоров -до 40%. В CCCP были
          наиболее распространены агрегаты мощностью 221-5510 кВт, за рубежом -
          368 и 8100 кВт. ГПА с центробежным нагнетателем широко применялись в
          CCCP и за рубежом: - на магистральных газопроводах в качестве основных
          агрегатов; - для работы в качестве первой ступени сжатия на ПХГ.
          Различают центробежные нагнетатели одноступенчатые (неполнонапорные)
          со степенью сжатия 1,23-1,25 и двухступенчатые (полнонапорные)
          -1,45-1,7. Центробежные нагнетатели характеризуются значительно
          большей, чем у поршневых компрессоров, производительностью (12-40 млн.
          м3/сутки).
        </ul>
        <p>
          В них отсутствуют внутренние трущиеся части, требующие смазки (за
          исключением подшипников), создаётся равномерный (без пульсации) поток
          газа. Для их установки (в связи с малым весом и габаритами, а также
          уравновешенностью вращающихся частей) требуются меньшие помещения и
          сооружаются облегчённые фундаменты. При применении ГПА с центробежными
          нагнетателями вследствие их большой производительности упрощается
          технологическая схема компрессорных станций, уменьшается количество
          запорной арматуры и др. Недостаток неполнонапорных центробежных
          нагнетателей - необходимость включения в работу 2х последовательно
          соединённых агрегатов для достижения степени сжатия газа 1,45-1,5. Это
          приводит к увеличенному расходу топливного газа в газотурбинной
          установке. Кпд агрегатов с центробежными нагнетателями до 29%, с
          регенератором тепла до 35%. Приводом ГПА служит газотурбинная
          установка или электродвигатель. В CCCP изготовливались ГПА с
          газотурбинным приводом мощностью 6, 10, 16 и 25 тысяч кВт.
        </p>

        <p>
          Газотурбинные установки авиационного и судового типов отличаются (от
          стационарных) небольшими габаритами и массой, что позволяет
          осуществлять их окончательную сборку на заводах-изготовителях и
          поставлять на компрессорные станции в готовом виде. ГПА с приводом от
          установок авиационного типа выполняются в блочно-контейнерном
          варианте. Поставляются на компрессорные станции со встроенными в них
          системами пожаротушения и взрывобезопасности. В качестве
          электропривода в ГПА используют асинхронные двигатели мощностью 4500
          кВт и синхронные от 4000 до 12500 кВт. Наибольшая эффективность
          применения ГПА с электроприводом достигается при расположении
          компрессорных станций не далее 300 км от линии электропередач. Для ГПА
          всех типов созданы системы автоматики, обеспечивающие: - пуск и работу
          агрегата в автоматическом режиме, - защиту при возникновении аварийных
          режимов, - сигнализацию о неисправностях и действии защит, - контроль
          объемной производительности нагнетателя, - автоматическое поддержание
          заданной температуры и давления масла при аварийной остановке агрегата
          и др. Каждый тип компрессоров имеет индивидуальные особенности как
          конструктивного, так и функционального характера. Именно поэтому,
          когда вы выбираете компрессор для ГПА или дожимной компрессорной
          установки, важно в полной мере учитывать условия его работы и
          требования, предъявляемые к его техническим характеристикам.
          Наибольшее значение имеют следующие параметры: - объем перекачиваемого
          газа; - давление и температура газа на входе/выходе; - химический
          состав и влажность перекачиваемого газа; - характеристики места
          инсталляции ГПА (максимальная и минимальная температура воздуха,
          высота над уровнем моря); - тип используемого привода; -
          предполагаемая годовая наработка в часах; - класс исполнения
          (взрывозащищенный, сейсмостойкий и др.); - допустимое содержание масла
          в газе на выходе; - тип автоматики (электрическая или пневматическая).
          Определенные виды компрессоров лучше использовать в следующих
          условиях: Компрессор поршневой - высокие степени повышения давления и
          высокие абсолютные давления, переменные режимы, сравнительно небольшие
          потоки и мощности (до 6 МВт). Компрессор винтовой - высокие степени
          повышения давления при небольших абсолютных давлениях и небольших
          перепадах давления, переменные режимы, сравнительно небольшие потоки и
          мощности (до 2000 кВт). Компрессор центробежный - большие потоки и
          мощности, предпочтительно небольшие степени повышения давления и
          невысокие абсолютные давления, постоянные режимы.
        </p>

        <p>
          Компрессорная станция KC1 считается головной компрессорной станцией
          нитки «А,Б» газопровода Туркменистан-Узбекистан-Казахстан-Китай(ТУКК).
          Она находится в 10,6 км от границы Узбекистана с Туркменистаном.
          Природный газ поступает на KC1 из двух источников по двум параллельным
          трубопроводам диаметром 1067 мм,. расстояние между которыми 16м:
        </p>
        <ol>
          <li>По линии «А» от Гос.концерна «Туркменгаз» (Малай).</li>
          <li>По линии «Б» от КННКИТ (Амударья).</li>
        </ol>
        <p>
          Проектная пропускная способность компрессорной станции KC1 составляет
          30 млрд.м3/год. . Компрессорная станция KC1 состоит из основного и
          вспомогательного оборудования. Основное технологическое оборудование
          компрессорной станции - газоперекачивающие агрегаты, обеспечивающие
          необходимый режим транспортировки газа по магистральному газопроводу.
        </p>

        <p>
          На KC1 эксплуатируются 5 газоперекачивающие агрегаты с газотурбинным
          двигателям, и с центробежным компрессором. 2 из них: газотурбинный
          двигатель SOLAR TITAN 130S (мощность N = 15 МВт ), центробежный
          компрессор С45-3 производство компании SOLAR. Другие 3 из них:
          газотурбинный двигатель PGT 25+ SAC (мощность N = 30 МВт),
          центробежный компрессор PCL 803/N производство компании GE (General
          Electric ).
        </p>

        <p>
          Для обеспечения экономичной, надежной и длительной работы
          компрессорной станции, уменьшения износа компрессоров, а также для
          подачи газа требуемого давления, необходимой температуры, чистоты и
          минимальной влажности компрессорные станции дополняются
          вспомогательным оборудованием. К вспомогательному оборудованию
          компрессорной станции KC1 относятся блок подготовки топливного газа,
          газогенераторы, дизель генератор, компрессоры сжатого воздуха,
          циклонные и фильтры сепараторы, ультразвуковые расходомеры, кабина
          анализа, аппараты воздушного охлаждения, предохранительная и запорная
          арматура, утилизатор выхлопных газов, котельный и т.д.
        </p>
      </div>
    </>
  )
}
